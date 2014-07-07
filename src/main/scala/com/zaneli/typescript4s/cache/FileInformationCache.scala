package com.zaneli.typescript4s.cache

import com.zaneli.typescript4s.{ PreprocessedFileInformation, SourceUnit, SyntaxTree }
import com.zaneli.typescript4s.ScriptEvaluator.{ evalSourceUnit, evalSyntaxTree }
import java.io.File
import java.util.concurrent.ConcurrentHashMap
import org.apache.commons.io.FileUtils
import org.mozilla.javascript.Scriptable
import scala.collection.JavaConverters._
import scala.collection.concurrent.{ Map => ConcurrentMap }
import scala.concurrent.{ Await, Future }
import scala.concurrent.duration.Duration

private[typescript4s] object FileInformationCache {

  // not use java.nio.file.WatchService because of occurring time rag
  private[this] val cacheMap: ConcurrentMap[String, (PreprocessedFileInformation, Future[SyntaxTree], Future[SourceUnit], Long)] =
    new ConcurrentHashMap().asScala

  private[typescript4s] def put(
    file: File, fileInfo: PreprocessedFileInformation, scope: Scriptable): Unit = this.synchronized {

    val filePath = file.getCanonicalPath

    cacheMap.getOrElseUpdate(filePath, {
      val syntaxTree = evalSyntaxTree(scope, filePath, FileUtils.readFileToString(file))
      val sourceUnit = evalSourceUnit(scope, syntaxTree)

      (fileInfo, syntaxTree, sourceUnit, file.lastModified)
    })
  }

  private[typescript4s] def getFileInfo(file: File): Option[PreprocessedFileInformation] = this.synchronized {
    cacheMap.get(file.getCanonicalPath) flatMap {
      case (fileInfo, _, _, lastModified) =>
        if (lastModified < file.lastModified) {
          cacheMap.remove(file.getCanonicalPath)
          None
        } else {
          Some(fileInfo)
        }
    }
  }

  private[typescript4s] def getSyntaxTree(file: File): Option[SyntaxTree] = {
    cacheMap.get(file.getCanonicalPath) map (v => Await.result(v._2, Duration.Inf))
  }

  private[typescript4s] def getSourceUnit(file: File): Option[SourceUnit] = {
    cacheMap.get(file.getCanonicalPath) map (v => Await.result(v._3, Duration.Inf))
  }

  private[typescript4s] def remove(file: File): Unit = this.synchronized {
    cacheMap.remove(file.getCanonicalPath)
  }
}
