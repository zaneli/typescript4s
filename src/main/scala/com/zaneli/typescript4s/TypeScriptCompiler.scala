package com.zaneli.typescript4s

import com.zaneli.typescript4s.ScriptEvaluator.{ globalScope, withContext }
import com.zaneli.typescript4s.ScriptableObjectHelper.{ addFileInfo, addPrepareResource, addSettings }
import java.io.File

class TypeScriptCompiler private (src: Seq[File], options: CompileOptions = CompileOptions()) {

  def out(file: File): TypeScriptCompiler =
    new TypeScriptCompiler(src, options.copy(out = file))
  def outDir(file: File): TypeScriptCompiler =
    new TypeScriptCompiler(src, options.copy(outDir = file))
  def mapRoot(file: File): TypeScriptCompiler =
    new TypeScriptCompiler(src, options.copy(mapRoot = file))
  def sourceRoot(file: File): TypeScriptCompiler =
    new TypeScriptCompiler(src, options.copy(sourceRoot = file))
  def module(kind: ModuleKind): TypeScriptCompiler =
    new TypeScriptCompiler(src, options.copy(module = kind))
  def target(version: ECMAVersion): TypeScriptCompiler =
    new TypeScriptCompiler(src, options.copy(target = version))
  def removeComments(flag: Boolean): TypeScriptCompiler =
    new TypeScriptCompiler(src, options.copy(removeComments = flag))
  def noImplicitAny(flag: Boolean): TypeScriptCompiler =
    new TypeScriptCompiler(src, options.copy(noImplicitAny = flag))
  def declaration(flag: Boolean): TypeScriptCompiler =
    new TypeScriptCompiler(src, options.copy(declaration = flag))
  def sourcemap(flag: Boolean): TypeScriptCompiler =
    new TypeScriptCompiler(src, options.copy(sourcemap = flag))

  def compile(): Seq[File] = ScriptEvaluator.synchronized {
    withContext { cx =>
      val executeScope = cx.newObject(globalScope)
      val settings = addSettings(cx, executeScope, options)
      val dest = addFileInfo(cx, executeScope, src)
      addPrepareResource(cx, executeScope, settings)
      cx.evaluateString(executeScope, ScriptResources.ts4sJs, "ts4s.js", 1, null)
      dest.toSeq
    }
  }
}

object TypeScriptCompiler {
  def apply(src: File*): TypeScriptCompiler = new TypeScriptCompiler(src)
}

class TypeScriptCompilerException(messages: String, cause: Throwable = null) extends Exception(messages, cause)
