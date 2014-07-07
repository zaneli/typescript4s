package com.zaneli.typescript4s.cache

import com.zaneli.typescript4s.{ ECMAVersion, ImmutableSettings }
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

  private[this] val fileInfoMap: ConcurrentMap[String, (PreprocessedFileInformation, Long)] = new ConcurrentHashMap().asScala
  private[this] val parseResultMap: ConcurrentMap[(String, ECMAVersion), (Future[SyntaxTree], Future[SourceUnit])] =
    new ConcurrentHashMap().asScala

  private[typescript4s] def putFileInfo(
    file: File, fileInfo: PreprocessedFileInformation): Unit = this.synchronized {
    fileInfoMap.getOrElseUpdate(file.getCanonicalPath, (fileInfo, file.lastModified))
  }

  private[typescript4s] def parseAndCache(
    files: Seq[File], version: ECMAVersion, settings: ImmutableSettings, scope: Scriptable): Unit = this.synchronized {

    files foreach { file =>
      val filePath = file.getCanonicalPath
      parseResultMap.getOrElseUpdate((filePath, version), {
        val syntaxTree = evalSyntaxTree(scope, filePath, FileUtils.readFileToString(file), Some(settings))
        val sourceUnit = evalSourceUnit(scope, syntaxTree, Some(settings))
        (syntaxTree, sourceUnit)
      })
    }
  }

  private[typescript4s] def getFileInfo(file: File): Option[PreprocessedFileInformation] = this.synchronized {
    val filePath = file.getCanonicalPath

    fileInfoMap.get(filePath) flatMap {
      case (fileInfo, lastModified) =>
        if (lastModified < file.lastModified) { // not use java.nio.file.WatchService because of occurring time rag
          fileInfoMap.remove(filePath)
          parseResultMap withFilter {
            case ((f, _), _) => f == filePath
          } foreach {
            case ((f, o), _) => parseResultMap.remove((f, o))
          }
          None
        } else {
          Some(fileInfo)
        }
    }
  }

  private[typescript4s] def getSyntaxTree(file: File, version: ECMAVersion): Option[SyntaxTree] = {
    parseResultMap.get(file.getCanonicalPath, version) map { case (f, _) => Await.result(f, Duration.Inf) }
  }

  private[typescript4s] def getSourceUnit(file: File, version: ECMAVersion): Option[SourceUnit] = {
    parseResultMap.get(file.getCanonicalPath, version) map { case (_, f) => Await.result(f, Duration.Inf) }
  }
}
