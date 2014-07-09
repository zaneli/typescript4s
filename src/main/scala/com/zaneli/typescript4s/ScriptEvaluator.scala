package com.zaneli.typescript4s

import akka.actor.{ Actor, Props }
import com.zaneli.typescript4s.ScriptableObjectHelper._
import java.io.File
import org.apache.commons.io.FileUtils
import org.mozilla.javascript._
import org.mozilla.javascript.ScriptableObject.putProperty
import org.mozilla.javascript.tools.shell.Global
import scala.collection.JavaConversions._
import scala.concurrent.ExecutionContext.Implicits.global
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

    val documents = evalDocuments(cx, scope)
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
      addSettings(cx, executeScope, options)
      addCache(cx, executeScope, options)
      putProperty(executeScope, "inputFileNames", cx.newArray(executeScope, src.map(_.getCanonicalPath.asInstanceOf[Object]).toArray))

      cx.evaluateString(
        executeScope,
        """
        TypeScript.Environment = ts4sEnv;
        var logger = new TypeScript.NullLogger();
        var compiler = new TypeScript.TypeScriptCompiler(logger, ts4sSettings);
        ts4sDefaultLibs.forEach(function (lib) {
          TypeScript.sourceCharactersCompiled += lib.snapshot.getLength();
          var d = ts4sUtil.getDocument(lib.name);
          d._compiler = compiler;
          d._semanticInfoChain = compiler.semanticInfoChain;
          compiler.semanticInfoChain.addDocument(d);
        });
        var result = TypeScript.ReferenceResolver.resolve(inputFileNames, ts4sHost);
        result.diagnostics.forEach(function (d) {
          if (d.info().category === TypeScript.DiagnosticCategory.Error) {
            throw d.message();
          }
        });

        result.resolvedFiles.forEach(function (f) {
          compiler.addFile(f.path, ts4sHost.getScriptSnapshot(f.path), TypeScript.ByteOrderMark.None, 0, false, f.referencedFiles);
        });

        var paths = result.resolvedFiles.map(function (f) { return f.path; });
        ts4sCache.parse(paths);
        compiler.ts4sCache = ts4sCache;

        result.resolvedFiles.forEach(function (f) {
          var d = ts4sCache.getDocument(f.path);
          d._compiler = compiler;
          d._semanticInfoChain = compiler.semanticInfoChain;
          compiler.semanticInfoChain.addDocument(d);
        });

        [compiler, paths];
        """,
        "resolve.js")
    }.asInstanceOf[NativeArray].toArray
    (compiler.asInstanceOf[NativeObject], files.asInstanceOf[NativeArray].toArray.map(f => new File(f.toString)))
  }

  private[typescript4s] def compile(compiler: NativeObject): Seq[File] = {
    withContext { cx =>
      val executeScope = cx.newObject(globalScope)
      putProperty(executeScope, "compiler", compiler)
      val destFiles = cx.evaluateString(
        executeScope,
        """
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

  private[this] def evalSyntaxTree(scope: Scriptable, name: String, content: String): SyntaxTree = {
    withContext { cx =>
      val tmpScope = cx.newObject(scope)
      tmpScope.put("compiler", tmpScope, scope.get("compiler", scope))
      tmpScope.put("filePath", tmpScope, name)
      tmpScope.put("content", tmpScope, content)
      cx.evaluateString(
        tmpScope,
        """
        TypeScript.Parser.parse(
          TypeScript.switchToForwardSlashes(filePath),
          TypeScript.SimpleText.fromString(content),
          TypeScript.isDTSFile(filePath),
          TypeScript.getParseOptions(compiler.compilationSettings()));
        """,
        "evalSyntaxTree.js")
    }
  }

  private[this] def evalSourceUnit(scope: Scriptable, st: SyntaxTree): SourceUnit = {
    withContext { cx =>
      val tmpScope = cx.newObject(scope)
      tmpScope.put("compiler", tmpScope, scope.get("compiler", scope))
      tmpScope.put("syntaxTree", tmpScope, st)
      cx.evaluateString(
        tmpScope,
        """
        syntaxTree.sourceUnit().accept(new TypeScript.SyntaxTreeToAstVisitor(
          syntaxTree.fileName(),
          syntaxTree.lineMap(),
          compiler.compilationSettings()));
        """,
        "evalSourceUnit.js")
    }
  }

  private[this] def evalDocument(scope: Scriptable, fileName: String): Document = {
    withContext { cx =>
      val content = if (ScriptResources.defaultLibNames.contains(fileName)) {
        ScriptResources.defaultLibs(fileName)
      } else {
        FileUtils.readFileToString(new File(fileName))
      }
      val stf = Future { evalSyntaxTree(scope, fileName, content) }
      val suf = stf map { evalSourceUnit(scope, _) }

      val tmpScope = cx.newObject(scope)
      tmpScope.put("compiler", tmpScope, scope.get("compiler", scope))
      tmpScope.put("fileName", tmpScope, fileName)
      tmpScope.put("syntaxTree", tmpScope, stf)
      tmpScope.put("sourceUnit", tmpScope, suf)
      cx.evaluateString(
        tmpScope,
        """
        var d = compiler.getDocument(fileName);
        d.syntaxTree = function() {
          if (!d._syntaxTree) {
            d._syntaxTree = ts4sUtil.awaitResult(syntaxTree);
          }
          d.cacheSyntaxTreeInfo(d._syntaxTree);
          return d._syntaxTree;
        };
        d.sourceUnit = function() {
          if (!d._sourceUnit) {
            d._sourceUnit = ts4sUtil.awaitResult(sourceUnit);
          }
          return d._sourceUnit;
        };
        d.topLevelDecl = function() {
          if (!d._topLevelDecl) {
            d._topLevelDecl = TypeScript.DeclarationCreator.create(d, d._semanticInfoChain, compiler.compilationSettings());
          }
          return d._topLevelDecl;
        };
        d;
        """,
        "evalDocument.js")
    }
  }

  private[this] def evalDocuments(cx: Context, scope: Scriptable): Map[String, Future[Document]] = {
    import akka.pattern.ask

    val tmpScope = cx.newObject(scope)
    cx.evaluateString(
      tmpScope,
      """
      TypeScript.Environment = ts4sEnv;
      var logger = new TypeScript.NullLogger();
      var compiler = new TypeScript.TypeScriptCompiler(logger, TypeScript.ImmutableCompilationSettings.defaultSettings());
      ts4sDefaultLibs.forEach(function (lib) {
        compiler.addFile(lib.name, lib.snapshot, TypeScript.ByteOrderMark.None, 0, false, []);
      });
      """,
      "")
    (ScriptResources.defaultLibNames map { name =>
      val da = as.actorOf(Props(classOf[DocumentActor]))
      (name -> (da ? (tmpScope, name)).map(_.asInstanceOf[Document]))
    }).toMap
  }

  class DocumentActor extends Actor {
    override def receive = {
      case (scope: Scriptable, fileName: String) => {
        val document = evalDocument(scope, fileName)
        sender ! document
      }
    }
  }
}
