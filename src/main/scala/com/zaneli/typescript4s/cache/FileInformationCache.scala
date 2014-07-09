package com.zaneli.typescript4s.cache

import akka.actor.Props
import akka.pattern.ask
import com.zaneli.typescript4s.{ as, timeout, ECMAVersion }
import com.zaneli.typescript4s.{ Document, PreprocessedFileInformation }
import com.zaneli.typescript4s.ScriptEvaluator.DocumentActor
import java.io.File
import java.util.concurrent.ConcurrentHashMap
import org.mozilla.javascript.Scriptable
import scala.collection.JavaConverters._
import scala.collection.concurrent.{ Map => ConcurrentMap }
import scala.concurrent.{ Await, Future }
import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.duration.Duration

private[typescript4s] object FileInformationCache {

  private[this] val fileInfoMap: ConcurrentMap[String, (PreprocessedFileInformation, Long)] = new ConcurrentHashMap().asScala
  private[this] val parseResultMap: ConcurrentMap[(String, ECMAVersion), (Future[Document])] =
    new ConcurrentHashMap().asScala

  private[typescript4s] def putFileInfo(
    file: File, fileInfo: PreprocessedFileInformation): Unit = this.synchronized {
    fileInfoMap.getOrElseUpdate(file.getCanonicalPath, (fileInfo, file.lastModified))
  }

  private[typescript4s] def parseAndCache(files: Seq[File], version: ECMAVersion, scope: Scriptable): Unit = this.synchronized {

    files foreach { file =>
      val filePath = file.getCanonicalPath
      parseResultMap.getOrElseUpdate((filePath, version), {
        val da = as.actorOf(Props(classOf[DocumentActor]))
        (da ? (scope, filePath)).map(_.asInstanceOf[Document])
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

  private[typescript4s] def getDocument(file: File, version: ECMAVersion): Option[Document] = {
    parseResultMap.get(file.getCanonicalPath, version) map (Await.result(_, Duration.Inf))
  }
}
