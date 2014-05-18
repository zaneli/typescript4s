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
    cx.evaluateReader(scope, new InputStreamReader(TypeScriptCompiler.getClass.getResourceAsStream("/tsc/tsc.js")), "tsc.js", 1, null)
    scope.put("ts4sEnvironment", scope, TypeScript4sEnvironment)
    scope.put("ts4sIO", scope, new TypeScript4sIO(cx, scope))
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
      val ts4sargs = cx.newArray(scope, args.collect { case arg if arg.nonEmpty => arg.asInstanceOf[Object] }.toArray)
      scope.put("ts4sargs", scope, ts4sargs)
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
    """
    TypeScript.Environment = {
      supportsCodePage: function() {
        return ts4sEnvironment.supportsCodePage();
      },
      newLine: ts4sEnvironment.newLine()
    };
    TypeScript.IO = {
      resolvePath: function(path) {
        return ts4sIO.resolvePath(path) + ''; // workaround: convert java string to js string (for call string.replace() method)
      },
      getExecutingFilePath: function() {
        return ts4sIO.getExecutingFilePath();
      },
      dirName: function(path) {
        return ts4sIO.dirName(path);
      },
      arguments: ts4sargs,
      printLine: function(log) {
        ts4sIO.printLine(log);
      },
      fileExists: function(file) {
        return ts4sIO.fileExists(file);
      },
      directoryExists: function(file) {
        return ts4sIO.directoryExists(file);
      },
      readFile: function(fileName) {
        return ts4sIO.readFile(fileName);
      },
      writeFile: function(path, contents, writeByteOrderMark) {
        ts4sIO.writeFile(path, contents);
      },
      stderr: {
        Write: function(log) {
          ts4sIO.error(log);
        }
      },
      quit: function(status) {
        ts4sIO.quit(status);
      }
    };
    var batch = new TypeScript.BatchCompiler(TypeScript.IO);
    batch.batchCompile();
    """
}

class TypeScriptCompilerException(messages: String) extends Exception(messages)
