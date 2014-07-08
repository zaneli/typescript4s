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
    cx.evaluateString(scope, ScriptResources.typescriptJs, "typescript.js")
    addHost(cx, scope)
    addEnv(cx, scope)
    addDefaultLibInfo(cx, scope)

    val documents = evalDocuments(cx, scope, evalSourceUnits(scope, evalSyntaxTrees(scope)))
    addUtil(cx, scope, documents)
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
      addCache(cx, executeScope, options, settings)
      putProperty(executeScope, "inputFileNames", cx.newArray(executeScope, src.map(_.getCanonicalPath.asInstanceOf[Object]).toArray))

      cx.evaluateString(
        executeScope,
        """
        TypeScript.Environment = ts4sEnv;
        var logger = new TypeScript.NullLogger();
        var compiler = new TypeScript.TypeScriptCompiler(logger, ts4sSettings);
        ts4sDefaultLibs.forEach(function (lib) {
          TypeScript.sourceCharactersCompiled += lib.snapshot.getLength();
          compiler.semanticInfoChain.addDocument(ts4sUtil.getDocument(lib.name));
        });
        var result = TypeScript.ReferenceResolver.resolve(inputFileNames, ts4sHost);
        result.diagnostics.forEach(function (d) {
          if (d.info().category === TypeScript.DiagnosticCategory.Error) {
            throw d.message();
          }
        });

        var paths = result.resolvedFiles.map(function (f) { return f.path; });
        ts4sCache.parse(paths);
        compiler.ts4sCache = ts4sCache;

        [compiler, paths];
        """,
        "resolve.js")
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
        destFiles
        """,
        "compile.js")
      destFiles.asInstanceOf[NativeArray].toArray.map(d => new File(d.toString))
    }.toList
  }

  private[typescript4s] def evalScriptSnapshot(cx: Context, scope: Scriptable, content: String): ScriptSnapshot = {
    val tmpScope = cx.newObject(scope)
    tmpScope.put(s"content", tmpScope, content)
    cx.evaluateString(tmpScope, "TypeScript.ScriptSnapshot.fromString(content);", "scriptSnapshot.js")
  }

  private[typescript4s] def evalSyntaxTree(
    scope: Scriptable, name: String, content: String, settings: Option[ImmutableSettings] = None): Future[SyntaxTree] = {
    import scala.concurrent.ExecutionContext.Implicits.global
    Future {
      withContext { cx =>
        val tmpScope = cx.newObject(scope)
        tmpScope.put("filePath", tmpScope, name)
        tmpScope.put("content", tmpScope, content)
        tmpScope.put("settings", tmpScope, settings.getOrElse(Undefined.instance))
        cx.evaluateString(
          tmpScope,
          """
          TypeScript.Parser.parse(
            TypeScript.switchToForwardSlashes(filePath),
            TypeScript.SimpleText.fromString(content),
            TypeScript.isDTSFile(filePath),
            TypeScript.getParseOptions(settings || TypeScript.ImmutableCompilationSettings.defaultSettings()));
          """,
          "evalSyntaxTree.js")
      }
    }
  }

  private[typescript4s] def evalSourceUnit(
    scope: Scriptable, syntaxTree: Future[SyntaxTree], settings: Option[ImmutableSettings] = None): Future[SourceUnit] = {
    import scala.concurrent.ExecutionContext.Implicits.global
    syntaxTree map { s =>
      withContext { cx =>
        val tmpScope = cx.newObject(scope)
        tmpScope.put("syntaxTree", tmpScope, s)
        tmpScope.put("settings", tmpScope, settings.getOrElse(Undefined.instance))
        cx.evaluateString(
          tmpScope,
          """
          syntaxTree.sourceUnit().accept(new TypeScript.SyntaxTreeToAstVisitor(
            syntaxTree.fileName(),
            syntaxTree.lineMap(),
            settings || TypeScript.ImmutableCompilationSettings.defaultSettings()));
          """,
          "evalSourceUnit.js")
      }
    }
  }
  private[this] def evalSyntaxTrees(scope: Scriptable): Map[String, Future[SyntaxTree]] = {
    (ScriptResources.defaultLibNames map { name =>
      val syntaxTree = evalSyntaxTree(scope, name, ScriptResources.defaultLibs(name))
      (name -> syntaxTree)
    }).toMap
  }

  private[this] def evalSourceUnits(scope: Scriptable, fs: Map[String, Future[SyntaxTree]]): Map[String, Future[(SyntaxTree, SourceUnit)]] = {
    import scala.concurrent.ExecutionContext.Implicits.global
    (ScriptResources.defaultLibNames map { name =>
      val stf = fs(name)
      val suf = evalSourceUnit(scope, stf)
      (name -> stf.flatMap(st => suf map (su => (st, su))))
    }).toMap
  }

  private[this] def evalDocuments(cx: Context, scope: Scriptable, fs: Map[String, Future[(SyntaxTree, SourceUnit)]]): Map[String, Future[Document]] = {
    import scala.concurrent.ExecutionContext.Implicits.global
    val compiler = cx.evaluateString(
      scope,
      """
      TypeScript.Environment = ts4sEnv;
      var logger = new TypeScript.NullLogger();
      var compiler = new TypeScript.TypeScriptCompiler(logger, TypeScript.ImmutableCompilationSettings.defaultSettings());
      ts4sDefaultLibs.forEach(function (lib) {
        compiler.addFile(lib.name, lib.snapshot, TypeScript.ByteOrderMark.None, 0, false, []);
      });
      compiler
      """,
      "")
    (ScriptResources.defaultLibNames map { name =>
      val document = fs(name).map {
        case (syntaxTree, sourceUnit) =>
          withContext { cx =>
            val tmpScope = cx.newObject(scope)
            tmpScope.put("compiler", tmpScope, compiler)
            tmpScope.put("fileName", tmpScope, name)
            tmpScope.put("syntaxTree", tmpScope, syntaxTree)
            tmpScope.put("sourceUnit", tmpScope, sourceUnit)
            cx.evaluateString(
              tmpScope,
              """
              var d = compiler.getDocument(fileName);
              d._syntaxTree = syntaxTree;
              d._sourceUnit = sourceUnit;
              d._topLevelDecl = TypeScript.DeclarationCreator.create(d, d._semanticInfoChain, compiler.compilationSettings());
              d;
              """,
              "evalDocument.js")
          }
      }
      (name -> document)
    }).toMap
  }
}
