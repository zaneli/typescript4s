package com.zaneli.typescript4s

import java.io.File
import org.apache.commons.io.FileUtils
import org.mozilla.javascript.{ Context, ContextFactory, JavaScriptException, Scriptable, Undefined, WrappedException }
import org.mozilla.javascript.tools.shell.Global
import scala.concurrent.Future

object TypeScriptCompiler {

  private[this] lazy val contextFactory = new ContextFactory()
  private[this] lazy val globalScope = init()

  private[this] def init(): Scriptable = withContext { cx =>
    cx.setOptimizationLevel(-1)
    cx.setLanguageVersion(Context.VERSION_1_7)
    val global = new Global()
    global.init(cx)
    val scope = cx.initStandardObjects(global)
    cx.evaluateString(scope, ScriptResources.typescriptJs, "typescript.js", 1, null)
    ScriptableObjectHelper.addHost(cx, scope)
    ScriptableObjectHelper.addEnv(cx, scope)
    ScriptableObjectHelper.addDefaultLibInfo(cx, scope)

    val syntaxTree = evalSyntaxTree(scope)
    val sourceUnit = evalSourceUnit(scope, syntaxTree)
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
      ScriptableObjectHelper.addPrepareResource(cx, executeScope, settings)
      cx.evaluateString(executeScope, ScriptResources.ts4sJs, "ts4s.js", 1, null)
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

  private[this] def evalSyntaxTree(scope: Scriptable): Map[String, Future[Object]] = {
    (ScriptResources.defaultLibNames.zipWithIndex map {
      case (name, index) =>
        val syntaxTree = evalSynaxTree(scope, name, ScriptResources.defaultLibs(name))
        (name -> syntaxTree)
    }).toMap
  }

  private[this] def evalSourceUnit(scope: Scriptable, fs: Map[String, Future[Object]]): Map[String, Future[Object]] = {
    (ScriptResources.defaultLibNames map (name => (name -> evalSourceUnit(scope, fs(name))))).toMap
  }

  private[typescript4s] def evalSynaxTree(
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
            ts4sFilePath,
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
          s"""
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
