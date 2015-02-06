package com.zaneli.typescript4s

import com.zaneli.typescript4s.ScriptEvaluator.createSourceFile
import java.io.File
import org.apache.commons.io.FileUtils
import org.mozilla.javascript.{ BaseFunction, Context, NativeObject, Scriptable, Undefined }
import org.mozilla.javascript.ScriptableObject.putProperty
import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.{ Await, Future }
import scala.concurrent.duration.Duration

private[typescript4s] object ScriptableObjectHelper {

  private[typescript4s] def createHost(cx: Context, scope: Scriptable): Scriptable = {
    val defaultLibCache: Map[(String, ECMAVersion), Future[_]] = Map(
      (ScriptResources.libDTs.name, ECMAVersion.ES3) -> Future(createSourceFile(
        scope, ScriptResources.libDTs.name, ScriptResources.libDTs.content, ECMAVersion.ES3)),
      (ScriptResources.libDTs.name, ECMAVersion.ES5) -> Future(createSourceFile(
        scope, ScriptResources.libDTs.name, ScriptResources.libDTs.content, ECMAVersion.ES5)),
      (ScriptResources.libES6DTs.name, ECMAVersion.ES6) -> Future(createSourceFile(
        scope, ScriptResources.libES6DTs.name, ScriptResources.libES6DTs.content, ECMAVersion.ES6)))

    val ts4sHost = cx.newObject(scope)
    putProperty(ts4sHost, "getDefaultLibFilename", function({ options =>
      val target = options.asInstanceOf[NativeObject].get("target").asInstanceOf[Integer]
      if (target == ECMAVersion.ES6.code) {
        ScriptResources.libES6DTs.name
      } else {
        ScriptResources.libDTs.name
      }
    }))
    putProperty(ts4sHost, "getCanonicalFileName", function({ fileName =>
      new File(fileName.toString).getCanonicalPath
    }))
    putProperty(ts4sHost, "getNewLine", function({ () =>
      System.getProperty("line.separator")
    }))
    putProperty(ts4sHost, "getCurrentDirectory", function({ () =>
      new File("").getCanonicalPath
    }))
    putProperty(ts4sHost, "getSourceFile", function({ (filename, languageVersion, onError) =>
      val fileName = filename.toString
      val version = ECMAVersion(languageVersion.asInstanceOf[Integer])
      defaultLibCache.get((fileName, version)).map(Await.result(_, Duration.Inf)).getOrElse {
        val text = FileUtils.readFileToString(new File(fileName))
        createSourceFile(cx, scope, fileName, text, version)
      }
    }))
    ts4sHost
  }

  private[typescript4s] def addRuntimeInfo(
    ts4sHost: Scriptable,
    scope: Scriptable,
    outputFiles: scala.collection.mutable.ListBuffer[File]): Unit = {
    putProperty(ts4sHost, "writeFile", function({ (fileName, data, writeByteOrderMark, onError) =>
      val file = new File(fileName.toString)
      outputFiles += file
      FileUtils.writeStringToFile(file, data.toString)
    }))
    put(VarName.ts4sHost, ts4sHost, scope)
  }

  private[typescript4s] def setCompilerOptions(cx: Context, scope: Scriptable, options: CompileOptions): Unit = {
    val compileOptions = cx.newObject(scope)

    putProperty(compileOptions, "removeComments", options.removeComments)
    putProperty(compileOptions, "out", options.outOpt.map(_.getCanonicalPath).getOrElse(""))
    putProperty(compileOptions, "outDir", options.outDirOpt.map(_.getCanonicalPath).getOrElse(""))
    putProperty(compileOptions, "mapRoot", options.mapRootOpt.map(_.getCanonicalPath).getOrElse(""))
    putProperty(compileOptions, "sourceRoot", options.sourceRootOpt.map(_.getCanonicalPath).getOrElse(""))
    putProperty(compileOptions, "target", options.target.code)
    putProperty(compileOptions, "module", options.module.code)
    putProperty(compileOptions, "declaration", options.declaration)
    putProperty(compileOptions, "sourceMap", options.sourceMap)
    putProperty(compileOptions, "noImplicitAny", options.noImplicitAny)
    putProperty(compileOptions, "noLib", options.noLib)
    putProperty(compileOptions, "noEmitOnError", options.noEmitOnError)

    put(VarName.ts4sCompileOptions, compileOptions, scope)
  }

  private[this] def put(name: String, obj: Any, scope: Scriptable) {
    scope.put(name, scope, obj)
  }

  private[this] def function(f: () => Any): BaseFunction = {
    function({ args => f() }, 0)
  }

  private[this] def function(f: (Object) => Any): BaseFunction = {
    function({ args => f(args(0)) }, 1)
  }

  private[this] def function(f: (Object, Object) => Any): BaseFunction = {
    function({ args => f(args(0), args(1)) }, 2)
  }

  private[this] def function(f: (Object, Object, Object) => Any): BaseFunction = {
    function({ args => f(args(0), args(1), args(2)) }, 3)
  }

  private[this] def function(f: (Object, Object, Object, Object) => Any): BaseFunction = {
    function({ args => f(args(0), args(1), args(2), args(3)) }, 4)
  }

  private[this] def function(f: (Array[Object]) => Any, arity: Int): BaseFunction = new BaseFunction() {
    override def call(cx: Context, scope: Scriptable, s: Scriptable, args: Array[Object]): Object = {
      f(args) match {
        case b: Boolean => if (b) java.lang.Boolean.TRUE else java.lang.Boolean.FALSE
        case _: Unit => Undefined.instance
        case o: Object => o
        case x => Context.toObject(x, scope)
      }
    }
    override def getArity = arity
  }

  private[this] object VarName {
    val ts4sHost = "ts4sHost"
    val ts4sCompileOptions = "ts4sCompileOptions"
  }
}
