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
  def removeComments(flag: Boolean): TypeScriptCompiler =
    new TypeScriptCompiler(src, options.copy(removeComments = flag))
  def noImplicitAny(flag: Boolean): TypeScriptCompiler =
    new TypeScriptCompiler(src, options.copy(noImplicitAny = flag))
  def declaration(flag: Boolean): TypeScriptCompiler =
    new TypeScriptCompiler(src, options.copy(declaration = flag))
  def sourcemap(flag: Boolean): TypeScriptCompiler =
    new TypeScriptCompiler(src, options.copy(sourcemap = flag))

  def compile(): Seq[File] = ScriptEvaluator.synchronized {
    val start = System.nanoTime
    val (compiler, _) = ScriptEvaluator.resolve(src, options)
    val dest = ScriptEvaluator.compile(compiler)
    logger.debug(s"""Done. (${(System.nanoTime - start) / 1000000} ms)""")
    dest
  }

  def watch(): Cancellable = {
    import scala.concurrent.ExecutionContext.Implicits.global
    import scala.collection.JavaConverters._
    import scala.concurrent.duration._
    import scala.language.postfixOps
    import scala.util.{ Failure, Success, Try }
    import java.nio.file.{ Path, WatchService }
    import java.nio.file.StandardWatchEventKinds.ENTRY_MODIFY

    val (compiler, files) = ScriptEvaluator.resolve(src, options)
    ScriptEvaluator.compile(compiler)

    var wss: Seq[(WatchService, Path, Seq[File])] = Nil

    def mkWatchServices(files: Seq[File]) = {
      wss = files.filter(_.isFile).groupBy(_.getParentFile.toPath).toSeq map {
        case (dir, files) => {
          val ws = dir.getFileSystem.newWatchService()
          val key = dir.register(ws, ENTRY_MODIFY)
          (ws, dir, files)
        }
      }
    }
    def getWatchServices(): Seq[(WatchService, Path, Seq[File])] = {
      wss
    }
    mkWatchServices(files)

    as.scheduler.schedule(0 seconds, 500 milliseconds) {
      val wss = getWatchServices()
      val updateFiles = for (
        (ws, dir, files) <- wss;
        key <- Option(ws.poll()).toSeq;
        event <- key.pollEvents.asScala if event.kind == ENTRY_MODIFY && event.context.isInstanceOf[Path];
        _ = key.reset();
        file = dir.resolve(event.context.asInstanceOf[Path]).toFile if files.contains(file)
      ) yield {
        file
      }
      if (updateFiles.nonEmpty) {
        val start = System.nanoTime
        val files = wss.flatMap(_._3)
        logger.debug(s"""Recompiling (${files.mkString(sep, sep, "")}):""")
        Try {
          val (compiler, files) = ScriptEvaluator.resolve(src, options)
          val dest = ScriptEvaluator.compile(compiler)
          (files, dest)
        } match {
          case Success((newFiles, dest)) => {
            if (newFiles != files) {
              mkWatchServices(newFiles)
            }
            logger.debug(s"""Done. (${(System.nanoTime - start) / 1000000} ms) (${dest.mkString(sep, sep, "")}):""")
          }
          case Failure(t) => logger.warn("Recompile failed.", t)
        }
      }
    }
  }
}

object TypeScriptCompiler {
  private val logger = LoggerFactory.getLogger(implicitly[scala.reflect.ClassTag[TypeScriptCompiler]].runtimeClass)
  private val sep = s"""${System.getProperty("line.separator")}    """

  def apply(src: File*): TypeScriptCompiler = new TypeScriptCompiler(src)
}

class TypeScriptCompilerException(messages: String, cause: Throwable = null) extends Exception(messages, cause)
