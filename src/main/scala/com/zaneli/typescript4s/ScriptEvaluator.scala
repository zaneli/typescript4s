package com.zaneli.typescript4s

import com.zaneli.typescript4s.ScriptableObjectHelper._
import java.io.File
import org.mozilla.javascript._
import org.mozilla.javascript.ScriptableObject.putProperty
import org.mozilla.javascript.tools.shell.Global
import scala.collection.JavaConversions._
import scala.concurrent.Future

private[typescript4s] object ScriptEvaluator {
  private[this] lazy val contextFactory = new ContextFactory()
  private[this] lazy val globalScope = init()

  private[this] def init(): Scriptable = withContext { cx =>
    cx.setOptimizationLevel(-1)
    cx.setLanguageVersion(Context.VERSION_1_7)
    val global = new Global()
    global.init(cx)
    val scope = cx.initStandardObjects(global)
    cx.evaluateString(scope, ScriptResources.typescriptJs, "typescript.js", 1, null)
    addHost(cx, scope)
    addEnv(cx, scope)
    addDefaultLibInfo(cx, scope)

    val syntaxTree = evalSyntaxTree(scope)
    val sourceUnit = evalSourceUnit(scope, syntaxTree)
    addUtil(cx, scope, syntaxTree, sourceUnit)
    scope
  }

  private[this] def withContext[A](f: Context => A): A = try {
    val cx = contextFactory.enterContext()
    f(cx)
  } catch {
    case e: WrappedException => throw e.getWrappedException()
    case e: JavaScriptException => throw new TypeScriptCompilerException(e.getMessage, cause = e)
  } finally {
    Context.exit()
  }

  private[typescript4s] def resolve(src: Seq[File], options: CompileOptions): (NativeObject, Seq[File]) = {
    val Array(compiler, files) = withContext { cx =>
      val executeScope = cx.newObject(globalScope)
      val settings = addSettings(cx, executeScope, options)
      addPrepareResource(cx, executeScope, settings)
      putProperty(executeScope, "ts4sSrcFiles", cx.newArray(executeScope, src.map(_.getAbsolutePath.asInstanceOf[Object]).toArray))

      cx.evaluateString(
        executeScope,
        """
        TypeScript.Environment = ts4sEnv;
        var logger = new TypeScript.NullLogger();
        var compiler = new TypeScript.TypeScriptCompiler(logger, ts4sSettings);
        ts4sDefaultLibs.forEach(function (lib) {
          compiler.addFile(lib.name, lib.snapshot, TypeScript.ByteOrderMark.None, 0, false, []);
        });
        var result = TypeScript.ReferenceResolver.resolve(ts4sSrcFiles, ts4sHost);
        result.diagnostics.forEach(function (d) {
          if (d.info().category === TypeScript.DiagnosticCategory.Error) {
            throw d.message();
          }
        });

        ts4sPrepareResource.load(result.resolvedFiles);
        compiler.ts4sPrepareResource = ts4sPrepareResource;

        [compiler, result.resolvedFiles.map(function (f) { return f.path; })]
        """,
        "resolve.js",
        1,
        null)
    }.asInstanceOf[NativeArray].toArray
    (compiler.asInstanceOf[NativeObject], files.asInstanceOf[NativeArray].toArray.map(f => new File(f.toString)))
  }

  private[typescript4s] def compile(compiler: NativeObject, files: Seq[File]): Seq[File] = {
    withContext { cx =>
      val executeScope = cx.newObject(globalScope)
      putProperty(executeScope, "compiler", compiler)
      putProperty(executeScope, "files", cx.newArray(executeScope, files.map(_.toString.asInstanceOf[Object]).toArray))
      val destFiles = cx.evaluateString(
        executeScope,
        """
        files.forEach(function (file) {
          compiler.addFile(file, ts4sHost.getScriptSnapshot(file), TypeScript.ByteOrderMark.None, 0, false, []);
        });

        var destFiles = [];
        for (var it = compiler.compile(function (path) { return path; }); it.moveNext();) {
          var result = it.current();
          result.diagnostics.forEach(function (d) {
            if (d.info().category === TypeScript.DiagnosticCategory.Error) {
              throw d.message();
            }
          });
          result.outputFiles.forEach(function (f) {
            TypeScript.Environment.writeFile(f.name, f.text, TypeScript.ByteOrderMark.None);
            destFiles.push(f.name);
          });
        }

        ts4sUtil.setDocuments(ts4sDefaultLibs.map(function (lib) {
            return compiler.getDocument(lib.name);
        }));

        destFiles
        """,
        "compile.js",
        1,
        null)
      destFiles.asInstanceOf[NativeArray].toArray.map(d => new File(d.toString))
    }.toList
  }

  private[typescript4s] def evalScriptSnapshot(cx: Context, scope: Scriptable, content: String): Object = {
    val tmpScope = cx.newObject(scope)
    tmpScope.put(s"content", tmpScope, content)
    cx.evaluateString(tmpScope, "TypeScript.ScriptSnapshot.fromString(content);", "scriptSnapshot.js", 1, null)
  }

  private[typescript4s] def evalSyntaxTree(
    scope: Scriptable, name: String, content: String, settings: Option[Object] = None): Future[Object] = {
    import scala.concurrent.ExecutionContext.Implicits.global
    Future {
      withContext { cx =>
        val tmpScope = cx.newObject(scope)
        tmpScope.put("ts4sFilePath", tmpScope, name)
        tmpScope.put("ts4sContent", tmpScope, content)
        tmpScope.put("ts4sSettings", tmpScope, settings.getOrElse(Undefined.instance))
        cx.evaluateString(
          tmpScope,
          """
          TypeScript.Parser.parse(
            TypeScript.switchToForwardSlashes(ts4sFilePath),
            TypeScript.SimpleText.fromString(ts4sContent),
            TypeScript.isDTSFile(ts4sFilePath),
            TypeScript.getParseOptions(ts4sSettings || TypeScript.ImmutableCompilationSettings.defaultSettings()));
          """,
          "syntaxTree.js",
          1,
          null)
      }
    }
  }

  private[typescript4s] def evalSourceUnit(
    scope: Scriptable, syntaxTree: Future[Object], settings: Option[Object] = None): Future[Object] = {
    import scala.concurrent.ExecutionContext.Implicits.global
    syntaxTree map { s =>
      withContext { cx =>
        val tmpScope = cx.newObject(scope)
        tmpScope.put("ts4sSyntaxTree", tmpScope, s)
        tmpScope.put("ts4sSettings", tmpScope, settings.getOrElse(Undefined.instance))
        cx.evaluateString(
          tmpScope,
          """
          ts4sSyntaxTree.sourceUnit().accept(new TypeScript.SyntaxTreeToAstVisitor(
            ts4sSyntaxTree.fileName(),
            ts4sSyntaxTree.lineMap(),
            ts4sSettings || TypeScript.ImmutableCompilationSettings.defaultSettings()));
          """,
          "sourceUnit.js",
          1,
          null)
      }
    }
  }

  private[this] def evalSyntaxTree(scope: Scriptable): Map[String, Future[Object]] = {
    (ScriptResources.defaultLibNames.zipWithIndex map {
      case (name, index) =>
        val syntaxTree = evalSyntaxTree(scope, name, ScriptResources.defaultLibs(name))
        (name -> syntaxTree)
    }).toMap
  }

  private[this] def evalSourceUnit(scope: Scriptable, fs: Map[String, Future[Object]]): Map[String, Future[Object]] = {
    (ScriptResources.defaultLibNames map (name => (name -> evalSourceUnit(scope, fs(name))))).toMap
  }
}
