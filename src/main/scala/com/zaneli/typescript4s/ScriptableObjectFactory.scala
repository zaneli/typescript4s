package com.zaneli.typescript4s

import java.io.File
import org.apache.commons.io.{ FileUtils, IOUtils }
import org.mozilla.javascript.{ BaseFunction, Context, Scriptable, ScriptableObject, Undefined }
import org.slf4s.Logging

object ScriptableObjectFactory extends Logging {

  private[typescript4s] val executingName = "/tsc/tsc.js"
  private[this] val defaultLibName = "/tsc/lib.d.ts"
  private[this] val byteOrderMarkNone = 0 // "TypeScript.ByteOrderMark.None"

  private[this] lazy val executingFilePath = ScriptableObjectFactory.getClass.getResource(executingName).getPath
  private[this] lazy val defaultLibContents = IOUtils.toString(ScriptableObjectFactory.getClass.getResourceAsStream(defaultLibName))

  def createEnv(cx: Context, scope: Scriptable): Scriptable = {
    val ts4sEnv = cx.newObject(scope)

    ScriptableObject.putProperty(ts4sEnv, "newLine", System.getProperty("line.separator"))

    ScriptableObject.putProperty(ts4sEnv, "supportsCodePage", new BaseFunction() {
      override def call(cx: Context, scope: Scriptable, s: Scriptable, args: Array[Object]): Object = {
        return java.lang.Boolean.FALSE
      }
      override def getArity = 0
    })

    ts4sEnv
  }

  def createIO(cx: Context, scope: Scriptable, args: Seq[String]): Scriptable = {
    val ts4sIO = cx.newObject(scope)

    val arguments = cx.newArray(scope, args.collect { case arg if arg.nonEmpty => arg.asInstanceOf[Object] }.toArray)
    ScriptableObject.putProperty(ts4sIO, "arguments", arguments)

    ScriptableObject.putProperty(ts4sIO, "getExecutingFilePath", new BaseFunction() {
      override def call(cx: Context, scope: Scriptable, s: Scriptable, args: Array[Object]): Object = {
        return executingFilePath
      }
      override def getArity = 0
    })

    ScriptableObject.putProperty(ts4sIO, "resolvePath", new BaseFunction() {
      override def call(cx: Context, scope: Scriptable, s: Scriptable, args: Array[Object]): Object = {
        val path = args(0).toString
        return new File(path).getAbsolutePath
      }
      override def getArity = 1
    })

    ScriptableObject.putProperty(ts4sIO, "dirName", new BaseFunction() {
      override def call(cx: Context, scope: Scriptable, s: Scriptable, args: Array[Object]): Object = {
        val path = args(0).toString
        return new File(path).getAbsoluteFile.getParent
      }
      override def getArity = 1
    })

    ScriptableObject.putProperty(ts4sIO, "fileExists", new BaseFunction() {
      override def call(cx: Context, scope: Scriptable, s: Scriptable, args: Array[Object]): Object = {
        val path = args(0).toString
        Boolean.box(new File(path).isFile())
      }
      override def getArity = 1
    })

    ScriptableObject.putProperty(ts4sIO, "directoryExists", new BaseFunction() {
      override def call(cx: Context, scope: Scriptable, s: Scriptable, args: Array[Object]): Object = {
        val path = args(0).toString
        Boolean.box(new File(path).isDirectory())
      }
      override def getArity = 1
    })

    ScriptableObject.putProperty(ts4sIO, "readFile", new BaseFunction() {
      override def call(cx: Context, scope: Scriptable, s: Scriptable, args: Array[Object]): Object = {
        val fileName = args(0).toString
        val contents = if (fileName.endsWith(defaultLibName)) {
          defaultLibContents
        } else {
          FileUtils.readFileToString(new File(fileName))
        }
        val obj = cx.newObject(scope)
        ScriptableObject.putProperty(obj, "contents", contents)
        ScriptableObject.putProperty(obj, "byteOrderMark", byteOrderMarkNone)
        obj
      }
      override def getArity = 1
    })

    ScriptableObject.putProperty(ts4sIO, "writeFile", new BaseFunction() {
      override def call(cx: Context, scope: Scriptable, s: Scriptable, args: Array[Object]): Object = {
        val path = args(0).toString
        val contents = args(1).toString
        FileUtils.writeStringToFile(new File(path), contents)
        Undefined.instance
      }
      override def getArity = 3
    })

    ScriptableObject.putProperty(ts4sIO, "printLine", new BaseFunction() {
      override def call(cx: Context, scope: Scriptable, s: Scriptable, args: Array[Object]): Object = {
        val log = args(0).toString
        println(log)
        Undefined.instance
      }
      override def getArity = 1
    })

    val stderr = cx.newObject(scope)
    ScriptableObject.putProperty(stderr, "Write", new BaseFunction() {
      override def call(cx: Context, scope: Scriptable, s: Scriptable, args: Array[Object]): Object = {
        val msg = args(0).toString
        log.error(msg)
        Undefined.instance
      }
      override def getArity = 1
    })
    ScriptableObject.putProperty(ts4sIO, "stderr", stderr)

    ScriptableObject.putProperty(ts4sIO, "quit", new BaseFunction() {
      override def call(cx: Context, scope: Scriptable, s: Scriptable, args: Array[Object]): Object = {
        val status = args(0).asInstanceOf[Double]
        if (status == 1.0) {
          throw new TypeScriptCompilerException("tsc quit with error")
        }
        Undefined.instance
      }
      override def getArity = 1
    })
    ts4sIO
  }
}
