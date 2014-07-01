package com.zaneli.typescript4s

import com.zaneli.typescript4s.ScriptEvaluator.{ evalScriptSnapshot, evalSourceUnit, evalSyntaxTree }
import java.io.File
import org.apache.commons.io.FileUtils
import org.mozilla.javascript.{ BaseFunction, Context, NativeArray, NativeObject, Scriptable, Undefined }
import org.mozilla.javascript.ScriptableObject.putProperty
import scala.concurrent.{ Await, Future }
import scala.concurrent.duration.Duration

private[typescript4s] object ScriptableObjectHelper {

  private[typescript4s] def addEnv(cx: Context, scope: Scriptable): Unit = {
    val ts4sEnv = cx.newObject(scope)
    putProperty(ts4sEnv, "newLine", System.getProperty("line.separator"))
    putProperty(ts4sEnv, "writeFile", function({ (path, contents, writeByteOrderMark) =>
      FileUtils.writeStringToFile(new File(path.toString), contents.toString)
    }))
    put(VarName.ts4sEnv, ts4sEnv, scope)
  }

  private[typescript4s] def addHost(cx: Context, scope: Scriptable): Unit = {
    val ts4sHost = cx.newObject(scope)
    putProperty(ts4sHost, "fileExists", function({ fileName =>
      new File(fileName.toString).exists()
    }))
    putProperty(ts4sHost, "getParentDirectory", function({ fileName =>
      new File(fileName.toString).getParentFile.getAbsolutePath
    }))
    putProperty(ts4sHost, "resolveRelativePath", function({ (fileName, parentFileDirectory) =>
      if (new File(fileName.toString).isAbsolute) {
        new File(fileName.toString).getAbsolutePath
      } else {
        new File(parentFileDirectory.toString, fileName.toString).getAbsolutePath
      }
    }))
    putProperty(ts4sHost, "getScriptSnapshot", function({ fileName =>
      evalScriptSnapshot(cx, scope, FileUtils.readFileToString(new File(fileName.toString)))
    }))
    put(VarName.ts4sHost, ts4sHost, scope)
  }

  private[typescript4s] def addUtil(
    cx: Context, scope: Scriptable, syntaxTree: Map[String, Future[Object]], sourceUnit: Map[String, Future[Object]]): Unit = {
    val ts4sUtil = cx.newObject(scope)
    putProperty(ts4sUtil, "isDefaultLib", function({ fileName =>
      ScriptResources.defaultLibNames.contains(fileName)
    }))
    putProperty(ts4sUtil, "getDefaultLibSyntaxTree", function({ fileName =>
      syntaxTree.get(fileName.toString).map(Await.result(_, Duration.Inf)).getOrElse(Undefined.instance)
    }))
    putProperty(ts4sUtil, "getDefaultLibSourceUnit", function({ fileName =>
      sourceUnit.get(fileName.toString).map(Await.result(_, Duration.Inf)).getOrElse(Undefined.instance)
    }))
    put(VarName.ts4sUtil, ts4sUtil, scope)
  }

  private[typescript4s] def addSettings(cx: Context, scope: Scriptable, options: CompileOptions): Object = {
    val mutableSettings = cx.evaluateString(
      scope, "new TypeScript.CompilationSettings()", "", 1, null).asInstanceOf[NativeObject]
    putProperty(mutableSettings, "removeComments", options.removeComments)
    putProperty(mutableSettings, "outFileOption", options.outOpt.map(_.getAbsolutePath).getOrElse(""))
    putProperty(mutableSettings, "outDirOption", options.outDirOpt.map(_.getAbsolutePath).getOrElse(""))
    putProperty(mutableSettings, "mapRoot", options.mapRootOpt.map(_.getAbsolutePath).getOrElse(""))
    putProperty(mutableSettings, "sourceRoot", options.sourceRootOpt.map(_.getAbsolutePath).getOrElse(""))
    putProperty(mutableSettings, "codeGenTarget", options.target.code)
    putProperty(mutableSettings, "moduleGenTarget", options.module.code)
    putProperty(mutableSettings, "generateDeclarationFiles", options.declaration)
    putProperty(mutableSettings, "mapSourceFiles", options.sourcemap)
    putProperty(mutableSettings, "noImplicitAny", options.noImplicitAny)

    val tmpScope = cx.newObject(scope)
    tmpScope.put("mutableSettings", tmpScope, mutableSettings)
    val immutableSettings = cx.evaluateString(
      tmpScope, "TypeScript.ImmutableCompilationSettings.fromCompilationSettings(mutableSettings)", "", 1, null)
    put(VarName.ts4sSettings, immutableSettings, scope)
    immutableSettings
  }

  private[typescript4s] def addDefaultLibInfo(cx: Context, scope: Scriptable): Unit = {
    val libs = ScriptResources.defaultLibNames map { name =>
      val lib = cx.newObject(scope)
      putProperty(lib, "name", name)
      putProperty(lib, "snapshot", evalScriptSnapshot(cx, scope, ScriptResources.defaultLibs(name)))
      lib.asInstanceOf[Object]
    }
    val ts4sDefaultLibs = cx.newArray(scope, libs.toArray)
    put(VarName.ts4sDefaultLibs, ts4sDefaultLibs, scope)
  }

  private[typescript4s] def addPrepareResource(cx: Context, scope: Scriptable, settings: Object): Unit = {
    val ts4sPrepareResource = cx.newObject(scope)
    var syntaxTrees: Map[File, Future[Object]] = Map()
    var sourceUnits: Map[File, Future[Object]] = Map()
    putProperty(ts4sPrepareResource, "load", function({ files =>
      syntaxTrees = (files.asInstanceOf[NativeArray].toArray map (_.asInstanceOf[NativeObject]) map { f =>
        val name = f.get("path").toString
        val file = new File(name)
        val syntaxTree = evalSyntaxTree(scope, name, FileUtils.readFileToString(file), Some(settings))
        (file -> syntaxTree)
      }).toMap
      sourceUnits = (syntaxTrees map {
        case (file, f) => (file -> evalSourceUnit(scope, f, Some(settings)))
      }).toMap
    }))
    putProperty(ts4sPrepareResource, "getSyntaxTree", function({ file =>
      syntaxTrees.get(new File(file.toString)).map(Await.result(_, Duration.Inf)).getOrElse(Undefined.instance)
    }))
    putProperty(ts4sPrepareResource, "getSourceUnit", function({ file =>
      sourceUnits.get(new File(file.toString)).map(Await.result(_, Duration.Inf)).getOrElse(Undefined.instance)
    }))
    put(VarName.ts4sPrepareResource, ts4sPrepareResource, scope)
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
    val ts4sEnv = "ts4sEnv"
    val ts4sUtil = "ts4sUtil"
    val ts4sHost = "ts4sHost"
    val ts4sSettings = "ts4sSettings"
    val ts4sDefaultLibs = "ts4sDefaultLibs"
    val ts4sPrepareResource = "ts4sPrepareResource"
  }
}
