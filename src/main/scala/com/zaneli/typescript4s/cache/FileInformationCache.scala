package com.zaneli.typescript4s.cache

import com.zaneli.typescript4s.ScriptEvaluator.{ evalSourceUnit, evalSyntaxTree }
import com.zaneli.typescript4s.util.FilePathUtil
import java.io.File
import java.nio.file.StandardWatchEventKinds.ENTRY_MODIFY
import java.nio.file.{ Path, WatchService }
import java.util.concurrent.ConcurrentHashMap
import org.apache.commons.io.FileUtils
import org.mozilla.javascript.Scriptable
import scala.collection.JavaConverters._
import scala.collection.concurrent.{ Map => ConcurrentMap }
import scala.concurrent.{ Await, Future }
import scala.concurrent.duration.Duration

private[typescript4s] object FileInformationCache {

  /**
   * { referencedFiles: NativeArray, importedFiles: NativeArray, isLibFile: Boolean, diagnostics: NativeArray }
   */
  private[this]type PreprocessedFileInformation = Object
  private[this]type SyntaxTree = Object
  private[this]type SourceUnit = Object

  private[this] val cacheMap: ConcurrentMap[String, (PreprocessedFileInformation, Future[SyntaxTree], Future[SourceUnit], WatchService)] =
    new ConcurrentHashMap().asScala

  private[typescript4s] def put(
    normalizedPath: String,
    fileInfo: PreprocessedFileInformation,
    scope: Scriptable): Unit = this.synchronized {

    val file = new File(normalizedPath.toString)
    val key = file.getCanonicalPath

    cacheMap.getOrElseUpdate(key, {
      val syntaxTree = evalSyntaxTree(scope, key, FileUtils.readFileToString(file))
      val sourceUnit = evalSourceUnit(scope, syntaxTree)

      val path = file.getParentFile.toPath()
      val ws = path.getFileSystem.newWatchService()
      path.register(ws, ENTRY_MODIFY)
      (fileInfo, syntaxTree, sourceUnit, ws)
    })
  }

  private[typescript4s] def getFileInfo(normalizedPath: String): Option[PreprocessedFileInformation] = this.synchronized {
    val file = new File(normalizedPath.toString)
    val cachedValue = cacheMap.get(file.getCanonicalPath.toString)
    val reseted = for (
      (fileInfo, _, _, ws) <- cachedValue.toSeq;
      wk <- Option(ws.poll()).toSeq;
      event <- wk.pollEvents.asScala if event.kind == ENTRY_MODIFY && event.context.isInstanceOf[Path];
      _ = wk.reset();
      f = FilePathUtil.toFile(file.getParentFile.toPath, event) if file.getCanonicalPath == f.getCanonicalPath
    ) yield {
      cacheMap.remove(file.getCanonicalPath.toString)
      wk.cancel()
      ws.close()
    }
    if (reseted.isEmpty) {
      cachedValue.map(_._1)
    } else {
      None
    }
  }

  private[typescript4s] def getSyntaxTree(filePath: String): Option[SyntaxTree] = {
    val file = new File(filePath.toString)
    cacheMap.get(file.getCanonicalPath.toString).map(_._2).map(Await.result(_, Duration.Inf))
  }

  private[typescript4s] def getSourceUnit(filePath: String): Option[SourceUnit] = {
    val file = new File(filePath.toString)
    cacheMap.get(file.getCanonicalPath.toString).map(_._3).map(Await.result(_, Duration.Inf))
  }
}
