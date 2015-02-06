package com.zaneli.typescript4s

import akka.actor.Cancellable
import java.io.File
import org.slf4j.{ Logger, LoggerFactory }

class TypeScriptCompiler private (src: Seq[File], options: CompileOptions = CompileOptions()) {
  import TypeScriptCompiler.{ logger, sep }

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
  def removeComments(removeComments: Boolean): TypeScriptCompiler =
    new TypeScriptCompiler(src, options.copy(removeComments = removeComments))
  def noImplicitAny(noImplicitAny: Boolean): TypeScriptCompiler =
    new TypeScriptCompiler(src, options.copy(noImplicitAny = noImplicitAny))
  def declaration(declaration: Boolean): TypeScriptCompiler =
    new TypeScriptCompiler(src, options.copy(declaration = declaration))
  def sourceMap(sourceMap: Boolean): TypeScriptCompiler =
    new TypeScriptCompiler(src, options.copy(sourceMap = sourceMap))
  def noLib(noLib: Boolean): TypeScriptCompiler =
    new TypeScriptCompiler(src, options.copy(noLib = noLib))
  def noEmitOnError(noEmitOnError: Boolean): TypeScriptCompiler =
    new TypeScriptCompiler(src, options.copy(noEmitOnError = noEmitOnError))

  def compile(): Seq[File] = ScriptEvaluator.synchronized {
    val start = System.nanoTime
    val dest = ScriptEvaluator.compile(src, options)
    logger.debug(s"""Done. (${(System.nanoTime - start) / 1000000} ms)""")
    dest
  }

  def watch(): Cancellable = {
    ???
  }
}

object TypeScriptCompiler {
  private val logger = LoggerFactory.getLogger(implicitly[scala.reflect.ClassTag[TypeScriptCompiler]].runtimeClass)
  private val sep = s"""${System.getProperty("line.separator")}    """

  def apply(src: File*): TypeScriptCompiler = new TypeScriptCompiler(src)
}

class TypeScriptCompilerException(messages: String, cause: Throwable = null) extends Exception(messages, cause)
