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
    val (_, dest) = ScriptEvaluator.compile(src, options)
    logger.debug(s"""Done. (${(System.nanoTime - start) / 1000000} ms)""")
    dest
  }

  def watch(): Cancellable = {
    import java.nio.file.{ Path, WatchService }
    import java.nio.file.StandardWatchEventKinds.ENTRY_MODIFY
    import scala.collection.JavaConverters._
    import scala.concurrent.ExecutionContext.Implicits.global
    import scala.concurrent.duration._
    import scala.language.postfixOps
    import scala.util.{ Failure, Success, Try }

    val srcFiles = Try(ScriptEvaluator.compile(src, options)) map {
      case (srcFiles, _) => srcFiles
    } getOrElse {
      src
    }

    var wss: Seq[(WatchService, Path, Seq[File])] = Nil

    def mkWatchServices(files: Seq[File]): Unit = {
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
    mkWatchServices(srcFiles)

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
        val files = wss.flatMap { case (_, _, files) => files }
        logger.debug(s"""Recompiling (${files.mkString(sep, sep, "")}):""")
        Try(ScriptEvaluator.compile(src, options)) match {
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
