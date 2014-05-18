package com.zaneli.typescript4s

import java.io.File
import org.apache.commons.io.{ FileUtils, IOUtils }
import org.mozilla.javascript.{ Context, Scriptable, ScriptableObject }
import org.slf4s.Logging

private[typescript4s] class TypeScript4sIO(cx: Context, scope: Scriptable) extends Logging {

  private[this] lazy val byteOrderMarkNone = 0 // "TypeScript.ByteOrderMark.None"

  private[this] lazy val defaultLibContents = IOUtils.toString(this.getClass.getResourceAsStream("/tsc/lib.d.ts"))

  private[this] lazy val executingFilePath = this.getClass.getResource("/tsc/tsc.js").getPath

  def readFile(fileName: String): Scriptable = {
    val contents = if (fileName.endsWith("/tsc/lib.d.ts")) {
      defaultLibContents
    } else {
      FileUtils.readFileToString(new File(fileName))
    }
    val obj = cx.newObject(scope)
    ScriptableObject.putProperty(obj, "contents", contents)
    ScriptableObject.putProperty(obj, "byteOrderMark", byteOrderMarkNone)
    obj
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
