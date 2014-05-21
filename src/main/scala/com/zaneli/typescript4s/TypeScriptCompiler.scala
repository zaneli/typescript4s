package com.zaneli.typescript4s

import java.io.{ File, InputStreamReader }
import org.mozilla.javascript.{ Context, ContextFactory, Scriptable }
import org.mozilla.javascript.tools.shell.Global

object TypeScriptCompiler {

  private[this] lazy val contextFactory = new ContextFactory()
  private[this] lazy val global = new Global()
  private[this] lazy val scope = init()

  def init(): Scriptable = withContext { cx =>
    cx.setOptimizationLevel(-1)
    cx.setLanguageVersion(Context.VERSION_1_7)
    global.init(cx)
    val scope = cx.initStandardObjects(global)
    cx.evaluateReader(
      scope, new InputStreamReader(TypeScriptCompiler.getClass.getResourceAsStream(ScriptableObjectFactory.executingName)), "tsc.js", 1, null)
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
    sourcemap: Boolean = false): File = {
    compile(src, CompileOptions(out, outDir, mapRoot, sourceRoot, module, target, removeComments, noImplicitAny, declaration, sourcemap))
  }
  def compile(src: File, options: CompileOptions): File = {
    execute(options.mkArgs(src): _*)
    val dest = getDestFilePath(src, options)
    if (!dest.isFile) {
      throw new TypeScriptCompilerException(s"${dest.getAbsolutePath} file not found.")
    }
    dest
  }

  def help(): Unit = {
    execute("--help")
  }

  def version(): Unit = {
    execute("--version")
  }

  def execute(args: String*): Unit = synchronized {
    withContext { cx =>
      scope.put(VarName.ts4sIO, scope, ScriptableObjectFactory.createIO(cx, scope, args))
      cx.evaluateString(scope, jsCodes, "compile.js", 1, null)
    }
  }

  private[this] def getDestFilePath(src: File, options: CompileOptions): File = (options.outOpt, options.outDirOpt) match {
    case (Some(file), _) => file
    case (_, Some(dir)) => getDestFilePath(dir, src)
    case _ => getDestFilePath(src.getParentFile, src)
  }

  private[this] def getDestFilePath(dir: File, src: File): File = {
    new File(dir, src.getName.split("""\.""").init.mkString(".") + ".js")
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

class TypeScriptCompilerException(messages: String) extends Exception(messages)
