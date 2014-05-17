package com.zaneli.typescript4s

import java.io.File
import org.apache.commons.io.{ FileUtils, IOUtils }
import org.slf4s.Logging

private[typescript4s] object TypeScript4sIO extends Logging {

  lazy val byteOrderMark = "TypeScript.ByteOrderMark.None"

  private[this] lazy val defaultLibContents = IOUtils.toString(TypeScript4sIO.getClass.getResourceAsStream("/tsc/lib.d.ts"))

  private[this] lazy val executingFilePath = TypeScript4sIO.getClass.getResource("/tsc/tsc.js").getPath

  private[this] lazy val defaultLibFileDir = new File(new File(executingFilePath).getParentFile, "lib.d.ts")

  def contents(fileName: String): String = {
    if (new File(fileName) == defaultLibFileDir) {
      defaultLibContents
    } else {
      FileUtils.readFileToString(new File(fileName))
    }
  }

  def getExecutingFilePath(): String = {
    executingFilePath
  }

  def printLine(msg: String): Unit = {
    println(msg)
  }

  def error(msg: String): Unit = {
    log.error(msg)
  }

  def resolvePath(path: String): String = {
    new File(path).getAbsolutePath
  }

  def dirName(path: String): String = {
    new File(path).getAbsoluteFile.getParent
  }

  def fileExists(path: String): Boolean = {
    new File(path).isFile()
  }

  def directoryExists(path: String): Boolean = {
    new File(path).isDirectory()
  }

  def writeFile(path: String, contents: String): Unit = {
    FileUtils.writeStringToFile(new File(path), contents)
  }

  def quit(status: Double): Unit = {
    if (status == 1.0) {
      throw new TypeScriptCompilerException("tsc quit with error")
    }
  }
}

class TypeScriptCompilerException(messages: String) extends Exception(messages)
