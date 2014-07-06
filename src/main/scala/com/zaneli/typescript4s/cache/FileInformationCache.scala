package com.zaneli.typescript4s.cache

import com.zaneli.typescript4s.util.FilePathUtil
import java.io.File
import java.nio.file.StandardWatchEventKinds.ENTRY_MODIFY
import java.nio.file.{ Path, WatchService }
import java.util.concurrent.ConcurrentHashMap
import scala.collection.JavaConverters._
import scala.collection.concurrent.{ Map => ConcurrentMap }

private[typescript4s] object FileInformationCache {

  /**
   * { referencedFiles: NativeArray, importedFiles: NativeArray, isLibFile: Boolean, diagnostics: NativeArray }
   */
  private[this]type PreprocessedFileInformation = Object

  private[this] val cacheMap: ConcurrentMap[String, (PreprocessedFileInformation, WatchService)] = new ConcurrentHashMap().asScala

  private[typescript4s] def put(normalizedPath: String, fileInfo: PreprocessedFileInformation): Unit = this.synchronized {
    val file = new File(normalizedPath.toString)
    val path = file.getParentFile.toPath()
    val ws = path.getFileSystem.newWatchService()
    path.register(ws, ENTRY_MODIFY)
    cacheMap.put(file.getCanonicalPath, (fileInfo, ws))
  }

  private[typescript4s] def get(normalizedPath: String): Option[PreprocessedFileInformation] = this.synchronized {
    val file = new File(normalizedPath.toString)
    val cachedValue = cacheMap.get(file.getCanonicalPath.toString)
    val reseted = for (
      (fileInfo, ws) <- cachedValue.toSeq;
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
}
