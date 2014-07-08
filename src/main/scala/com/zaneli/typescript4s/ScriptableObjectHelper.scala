package com.zaneli.typescript4s

import com.zaneli.typescript4s.ScriptEvaluator.{ evalScriptSnapshot, evalSourceUnit, evalSyntaxTree }
import com.zaneli.typescript4s.cache.FileInformationCache
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
      new File(fileName.toString).getParentFile.getCanonicalPath
    }))
    putProperty(ts4sHost, "resolveRelativePath", function({ (fileName, parentFileDirectory) =>
      if (new File(fileName.toString).isAbsolute) {
        new File(fileName.toString).getCanonicalPath
      } else {
        new File(parentFileDirectory.toString, fileName.toString).getCanonicalPath
      }
    }))
    putProperty(ts4sHost, "getScriptSnapshot", function({ fileName =>
      evalScriptSnapshot(cx, scope, FileUtils.readFileToString(new File(fileName.toString)))
    }))
    put(VarName.ts4sHost, ts4sHost, scope)
  }

  private[typescript4s] def addUtil(cx: Context, scope: Scriptable, documents: Map[String, Future[Document]]): Unit = {

    val ts4sUtil = cx.newObject(scope)

    putProperty(ts4sUtil, "sameSymbol", function({ (obj1, obj2) =>
      (obj1, obj2) match {
        case (symbol1: NativeObject, symbol2: NativeObject) => {
          symbol1.get("pullSymbolID") == symbol2.get("pullSymbolID") &&
            symbol1.get("name") == symbol2.get("name") &&
            symbol1.get("kind") == symbol2.get("kind")
        }
        case _ => false
      }
    }))

    putProperty(ts4sUtil, "isDefaultLib", function({ fileName =>
      ScriptResources.defaultLibNames.contains(fileName)
    }))
    putProperty(ts4sUtil, "getDocument", function({ fileName =>
      documents.get(fileName.toString).map(Await.result(_, Duration.Inf)).getOrElse(Undefined.instance)
    }))

    putProperty(ts4sUtil, "getFileInformation", function({ normalizedPath =>
      FileInformationCache.getFileInfo(new File(normalizedPath.toString)).getOrElse(Undefined.instance)
    }))
    putProperty(ts4sUtil, "putFileInformation", function({ (normalizedPath, fileInfo) =>
      FileInformationCache.putFileInfo(new File(normalizedPath.toString), fileInfo)
    }))

    put(VarName.ts4sUtil, ts4sUtil, scope)
  }

  private[typescript4s] def addSettings(cx: Context, scope: Scriptable, options: CompileOptions): ImmutableSettings = {
    val settings = cx.evaluateString(
      scope, "new TypeScript.CompilationSettings()", "compilationSettings.js").asInstanceOf[NativeObject]
    putProperty(settings, "removeComments", options.removeComments)
    putProperty(settings, "outFileOption", options.outOpt.map(_.getCanonicalPath).getOrElse(""))
    putProperty(settings, "outDirOption", options.outDirOpt.map(_.getCanonicalPath).getOrElse(""))
    putProperty(settings, "mapRoot", options.mapRootOpt.map(_.getCanonicalPath).getOrElse(""))
    putProperty(settings, "sourceRoot", options.sourceRootOpt.map(_.getCanonicalPath).getOrElse(""))
    putProperty(settings, "codeGenTarget", options.target.code)
    putProperty(settings, "moduleGenTarget", options.module.code)
    putProperty(settings, "generateDeclarationFiles", options.declaration)
    putProperty(settings, "mapSourceFiles", options.sourcemap)
    putProperty(settings, "noImplicitAny", options.noImplicitAny)

    val tmpScope = cx.newObject(scope)
    tmpScope.put("settings", tmpScope, settings)
    val immutableSettings = cx.evaluateString(
      tmpScope, "TypeScript.ImmutableCompilationSettings.fromCompilationSettings(settings)", "immutableCompilationSettings.js")
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

  private[typescript4s] def addCache(cx: Context, scope: Scriptable, options: CompileOptions, settings: ImmutableSettings): Unit = {
    val ts4sCache = cx.newObject(scope)

    putProperty(ts4sCache, "parse", function({ fileNames =>
      val files = fileNames.asInstanceOf[NativeArray].toArray.map(f => new File(f.toString)).toSeq
      FileInformationCache.parseAndCache(files, options.target, settings, scope)
    }))
    putProperty(ts4sCache, "getSyntaxTree", function({ fileName =>
      FileInformationCache.getSyntaxTree(new File(fileName.toString), options.target).getOrElse(Undefined.instance)
    }))
    putProperty(ts4sCache, "getSourceUnit", function({ fileName =>
      FileInformationCache.getSourceUnit(new File(fileName.toString), options.target).getOrElse(Undefined.instance)
    }))

    put(VarName.ts4sCache, ts4sCache, scope)
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
    val ts4sCache = "ts4sCache"
  }
}
