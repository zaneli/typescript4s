package com.zaneli.typescript4s

import java.io.{ File, InputStreamReader }
import org.mozilla.javascript.{ Context, ContextFactory, Scriptable }
import org.mozilla.javascript.tools.shell.Global

class TypeScriptCompiler {

  private[this] lazy val contextFactory = new ContextFactory()
  private[this] lazy val global = new Global()
  private[this] lazy val scope = init()

  def init(): Scriptable = withContext { cx =>
    cx.setOptimizationLevel(-1)
    cx.setLanguageVersion(Context.VERSION_1_7)
    global.init(cx)
    val scope = cx.initStandardObjects(global)
    cx.evaluateReader(
      scope, new InputStreamReader(this.getClass.getResourceAsStream(executingName)), "tsc.js", 1, null)
    scope.put(VarName.ts4sEnv, scope, ScriptableObjectFactory.createEnv(cx, scope))
    scope.put(VarName.ts4sUtil, scope, ScriptableObjectFactory.createUtil(cx, scope))
    scope
  }

  def compile(
    src: File,
    out: File = null,
    outDir: File = null,
    mapRoot: File = null,
    sourceRoot: File = null,
    module: ModuleKind = null,
    target: ECMAVersion = null,
    removeComments: Boolean = false,
    noImplicitAny: Boolean = false,
    declaration: Boolean = false,
    sourcemap: Boolean = false): Seq[File] = {
    compile(src, CompileOptions(out, outDir, mapRoot, sourceRoot, module, target, removeComments, noImplicitAny, declaration, sourcemap))
  }
  def compile(src: File, options: CompileOptions): Seq[File] = {
    execute(options.mkArgs(src): _*)
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

  def execute(args: String*): Unit = synchronized {
    withContext { cx =>
      scope.put(VarName.ts4sIO, scope, ScriptableObjectFactory.createIO(cx, scope, args))
      cx.evaluateString(scope, jsCodes, "compile.js", 1, null)
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

  private[this] def withContext[A](f: Context => A): A = try {
    val cx = contextFactory.enterContext()
    f(cx)
  } finally {
    Context.exit()
  }

  private[this] val jsCodes: String =
    s"""
    TypeScript.Environment = ${VarName.ts4sEnv};
    TypeScript.IO = ${VarName.ts4sIO};
    var batch = new TypeScript.BatchCompiler(TypeScript.IO);
    batch.batchCompile();
    """

  private[this] object VarName {
    val ts4sEnv = "ts4sEnv"
    val ts4sIO = "ts4sIO"
    val ts4sUtil = "ts4sUtil"
  }
}

object TypeScriptCompiler {
  def help(): Unit = {
    new TypeScriptCompiler().execute("--help")
  }

  def version(): Unit = {
    new TypeScriptCompiler().execute("--version")
  }
}

class TypeScriptCompilerException(messages: String) extends Exception(messages)
