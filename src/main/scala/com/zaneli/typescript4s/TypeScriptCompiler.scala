package com.zaneli.typescript4s

import java.io.File
import org.mozilla.javascript.{ Context, ContextFactory, JavaScriptException, NativeObject, Scriptable, WrappedException }
import org.mozilla.javascript.tools.shell.Global
import scala.concurrent.{ Await, Future }
import scala.concurrent.duration.Duration

object TypeScriptCompiler {

  private[this] lazy val contextFactory = new ContextFactory()
  private[this] lazy val globalScope = init()

  private[this] def init(): Scriptable = withContext { cx =>
    cx.setOptimizationLevel(-1)
    cx.setLanguageVersion(Context.VERSION_1_7)
    val global = new Global()
    global.init(cx)
    val scope = cx.initStandardObjects(global)
    cx.evaluateString(scope, ScriptResources.tsServices, "typescriptServices.js", 1, null)
    ScriptableObjectHelper.addHost(cx, scope)
    ScriptableObjectHelper.addEnv(cx, scope)
    ScriptableObjectHelper.addDefaultLibInfo(cx, scope)

    val syntaxTree = evalSyntaxTree(scope)
    val sourceUnit = evalSourceUnit(cx, scope, syntaxTree)
    ScriptableObjectHelper.addUtil(cx, scope, syntaxTree, sourceUnit)
    scope
  }

  def compile(
    src: File,
    out: File = null,
    outDir: File = null,
    mapRoot: File = null,
    sourceRoot: File = null,
    module: ModuleKind = ModuleKind.Unspecified,
    target: ECMAVersion = ECMAVersion.ES3,
    removeComments: Boolean = false,
    noImplicitAny: Boolean = false,
    declaration: Boolean = false,
    sourcemap: Boolean = false): Seq[File] = {
    compile(src, CompileOptions(out, outDir, mapRoot, sourceRoot, module, target, removeComments, noImplicitAny, declaration, sourcemap))
  }
  def compile(src: File, options: CompileOptions): Seq[File] = {
    execute(src, options)

    val (destDir, fileName) = getDestInfo(src, options)
    val destFile = getDestFilePath(destDir, fileName, "js")
    if (!destFile.isFile) {
      throw new TypeScriptCompilerException(s"${destFile.getAbsolutePath} file not found.")
    }

    val files = new scala.collection.mutable.ListBuffer[File]()
    files += destFile
    if (options.declaration) {
      val declarationFile = getDestFilePath(destDir, fileName, "d.ts")
      if (!declarationFile.isFile) {
        throw new TypeScriptCompilerException(s"${declarationFile.getAbsolutePath} file not found.")
      }
      files += declarationFile
    }
    if (options.sourcemap) {
      val sourcemapFile = getDestFilePath(destDir, fileName, "js.map")
      if (!sourcemapFile.isFile) {
        throw new TypeScriptCompilerException(s"${sourcemapFile.getAbsolutePath} file not found.")
      }
      files += sourcemapFile
    }
    files.toSeq
  }

  private[this] def execute(src: File, options: CompileOptions): Unit = synchronized {
    withContext { cx =>
      val executeScope = cx.newObject(globalScope)
      val settings = ScriptableObjectHelper.addSettings(cx, executeScope, options)
      ScriptableObjectHelper.addInputFiles(cx, executeScope, src)
      ScriptableObjectHelper.addSyntaxTreeHolder(cx, executeScope, settings)
      cx.evaluateString(executeScope, ScriptResources.ts4s, "ts4s.js", 1, null)
    }
  }

  private[this] def getDestInfo(src: File, options: CompileOptions): (File, String) = (options.outOpt, options.outDirOpt) match {
    case (Some(file), _) => (file.getParentFile, getFileName(file))
    case (_, Some(dir)) => (dir, getFileName(src))
    case _ => (src.getParentFile, getFileName(src))
  }

  private[this] def getFileName(file: File): String = {
    file.getName.split("""\.""").init.mkString(".")
  }

  private[this] def getDestFilePath(dir: File, srcName: String, ext: String): File = {
    new File(dir, s"${srcName}.${ext}")
  }

  private[typescript4s] def evalSyntaxTree(
    scope: Scriptable, nameSnapshots: Seq[(String, Object)], settings: Object): Map[File, Future[Object]] = {
    import scala.concurrent.ExecutionContext.Implicits.global

    (nameSnapshots.map {
      case (name, snapshot) =>
        val f = Future {
          withContext { cx =>
            val tmpScope = cx.newObject(scope)
            tmpScope.put("ts4sFilePath", tmpScope, name)
            tmpScope.put("ts4sSnapshot", tmpScope, snapshot)
            tmpScope.put("ts4sSettings", tmpScope, settings)
            cx.evaluateString(
              tmpScope,
              """
              TypeScript.Parser.parse(
                ts4sFilePath,
                TypeScript.SimpleText.fromScriptSnapshot(ts4sSnapshot),
                TypeScript.isDTSFile(ts4sFilePath),
                TypeScript.getParseOptions(ts4sSettings));
              """,
              "syntaxTree.js",
              1,
              null)
          }
        }
        (new File(name) -> f)
    }).toMap
  }

  private[this] def evalSyntaxTree(scope: Scriptable): Map[String, Object] = {
    import scala.concurrent.ExecutionContext.Implicits.global

    val fs = ScriptResources.defaultLibNames.zipWithIndex map {
      case (name, index) => Future {
        withContext { cx =>
          val tmpScope = cx.newObject(scope)
          val syntaxTree = cx.evaluateString(
            tmpScope,
            s"""
            TypeScript.Parser.parse(
              ts4sDefaultLibs[${index}].name,
              TypeScript.SimpleText.fromScriptSnapshot(ts4sDefaultLibs[${index}].snapshot),
              TypeScript.isDTSFile(ts4sDefaultLibs[${index}].name),
              TypeScript.getParseOptions(TypeScript.ImmutableCompilationSettings.defaultSettings()));
            """,
            "syntaxTree.js",
            1,
            null)
          (name -> syntaxTree)
        }
      }
    }
    Await.result(Future.sequence(fs), Duration.Inf).toMap
  }

  private[this] def evalSourceUnit(
    cx: Context, scope: Scriptable, syntaxTree: Map[String, Object]): Map[String, Object] = {
    import scala.concurrent.ExecutionContext.Implicits.global

    val fs = ScriptResources.defaultLibNames map { name =>
      Future {
        withContext { cx =>
          val tmpScope = cx.newObject(scope)
          tmpScope.put("ts4sSyntaxTree", tmpScope, syntaxTree(name))
          val sourceUnit = cx.evaluateString(
            tmpScope,
            s"""
            var ts4sSourceUnit = ts4sSyntaxTree.sourceUnit();
            var ts4sLineMap = ts4sSyntaxTree.lineMap();
            """,
            "sourceUnitLineMap.js",
            1,
            null)
          (name -> (tmpScope.get("ts4sSourceUnit", tmpScope), tmpScope.get("ts4sLineMap", tmpScope)))
        }
      }
    }
    (Await.result(Future.sequence(fs), Duration.Inf).toMap map {
      case (name, (s, l)) =>
        val tmpScope = cx.newObject(scope)
        tmpScope.put("ts4sSourceUnit", tmpScope, s)
        tmpScope.put("ts4sLineMap", tmpScope, l)
        val sourceUnit = cx.evaluateString(
          tmpScope,
          s"""
          ts4sSourceUnit.accept(new TypeScript.SyntaxTreeToAstVisitor(
            "${name}",
            ts4sLineMap,
            TypeScript.ImmutableCompilationSettings.defaultSettings()));
          """,
          "sourceUnitAccept.js",
          1,
          null)
        (name -> sourceUnit)
    }).toMap
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
}

class TypeScriptCompilerException(messages: String, cause: Throwable = null) extends Exception(messages, cause)
