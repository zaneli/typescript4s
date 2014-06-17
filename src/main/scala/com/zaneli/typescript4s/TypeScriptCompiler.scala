package com.zaneli.typescript4s

import com.zaneli.typescript4s.ScriptEvaluator.{ globalScope, withContext }
import com.zaneli.typescript4s.ScriptableObjectHelper.{ addInputFiles, addPrepareResource, addSettings }
import java.io.File

object TypeScriptCompiler {

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
      val settings = addSettings(cx, executeScope, options)
      addInputFiles(cx, executeScope, src)
      addPrepareResource(cx, executeScope, settings)
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
}

class TypeScriptCompilerException(messages: String, cause: Throwable = null) extends Exception(messages, cause)
