package com.zaneli.typescript4s

import java.io.{ File, InputStreamReader }
import org.apache.commons.io.{ FileUtils, IOUtils }
import org.mozilla.javascript.{ Context, ContextFactory, Scriptable, WrappedException }
import org.mozilla.javascript.tools.shell.Global
import org.mozilla.javascript.JavaScriptException

class TypeScriptCompiler {

  private[this] lazy val contextFactory = new ContextFactory()
  private[this] lazy val globalScope = init()

  private[this] def init(): Scriptable = withContext { cx =>
    cx.setOptimizationLevel(-1)
    cx.setLanguageVersion(Context.VERSION_1_7)
    val global = new Global()
    global.init(cx)
    val scope = cx.initStandardObjects(global)
    cx.evaluateString(scope, TypeScriptCompiler.tsServices, "typescriptServices.js", 1, null)
    ScriptableObjectHelper.addUtil(cx, scope)
    ScriptableObjectHelper.addHost(cx, scope)
    ScriptableObjectHelper.addEnv(cx, scope)
    scope.put("defaultLibSnapshot", scope, ScriptableObjectHelper.getScriptSnapshot(cx, scope, TypeScriptCompiler.defaultLib))
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
      ScriptableObjectHelper.addSettings(cx, executeScope, options)
      ScriptableObjectHelper.addInputFiles(cx, executeScope, src)
      cx.evaluateString(executeScope, TypeScriptCompiler.ts4s, "ts4s.js", 1, null)
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
  } catch {
    case e: WrappedException => throw e.getWrappedException()
    case e: JavaScriptException => throw new TypeScriptCompilerException(e.getMessage, cause = e)
  } finally {
    Context.exit()
  }
}

object TypeScriptCompiler {
  private lazy val tsServices = IOUtils.toString(classOf[TypeScriptCompiler].getResourceAsStream("/tsc/typescriptServices.js"))
  private lazy val ts4s = IOUtils.toString(classOf[TypeScriptCompiler].getResourceAsStream("/tsc/ts4s.js"))
  private lazy val defaultLib = IOUtils.toString(classOf[TypeScriptCompiler].getResourceAsStream("/tsc/lib.d.ts"))
}

class TypeScriptCompilerException(messages: String, cause: Throwable = null) extends Exception(messages, cause)
