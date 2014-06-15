package com.zaneli.typescript4s

import java.io.File
import org.mozilla.javascript.{ Context, ContextFactory, JavaScriptException, Scriptable, WrappedException }
import org.mozilla.javascript.tools.shell.Global
import scala.concurrent.Future

object TypeScriptCompiler {

  private[this] lazy val contextFactory = new ContextFactory()
  private[this] lazy val globalScope = init()

  private[this] def init(): Scriptable = withContext { cx =>
    cx.setOptimizationLevel(-1)
    cx.setLanguageVersion(Context.VERSION_1_7)
    val global = new Global()
    global.init(cx)
    val scope = cx.initStandardObjects(global)
    cx.evaluateString(scope, ScriptResources.typescriptJs, "typescript.js", 1, null)
    ScriptableObjectHelper.addHost(cx, scope)
    ScriptableObjectHelper.addEnv(cx, scope)
    ScriptableObjectHelper.addDefaultLibInfo(cx, scope)

    val syntaxTree = evalSyntaxTree(scope)
    val sourceUnit = evalSourceUnit(scope, syntaxTree)
    ScriptableObjectHelper.addUtil(cx, scope, syntaxTree, sourceUnit)
    scope
  }

  def compile(
    src: File,
    out: File = null,
    outDir: File = null,
    mapRoot: File = null,
    sourceRoot: File = null,
    module: ModuleKind = ModuleKind.Unspecified,
    target: ECMAVersion = ECMAVersion.ES3,
    removeComments: Boolean = false,
    noImplicitAny: Boolean = false,
    declaration: Boolean = false,
    sourcemap: Boolean = false): Seq[File] = {
    compile(src, CompileOptions(out, outDir, mapRoot, sourceRoot, module, target, removeComments, noImplicitAny, declaration, sourcemap))
  }
  def compile(src: File, options: CompileOptions): Seq[File] = {
    execute(src, options)

    val (destDir, fileName) = getDestInfo(src, options)
    val destFile = getDestFilePath(destDir, fileName, "js")
    if (!destFile.isFile) {
      throw new TypeScriptCompilerException(s"${destFile.getAbsolutePath} file not found.")
    }

    val files = new scala.collection.mutable.ListBuffer[File]()
    files += destFile
    if (options.declaration) {
      val declarationFile = getDestFilePath(destDir, fileName, "d.ts")
      if (!declarationFile.isFile) {
        throw new TypeScriptCompilerException(s"${declarationFile.getAbsolutePath} file not found.")
      }
      files += declarationFile
    }
    if (options.sourcemap) {
      val sourcemapFile = getDestFilePath(destDir, fileName, "js.map")
      if (!sourcemapFile.isFile) {
        throw new TypeScriptCompilerException(s"${sourcemapFile.getAbsolutePath} file not found.")
      }
      files += sourcemapFile
    }
    files.toSeq
  }

  private[this] def execute(src: File, options: CompileOptions): Unit = synchronized {
    withContext { cx =>
      val executeScope = cx.newObject(globalScope)
      val settings = ScriptableObjectHelper.addSettings(cx, executeScope, options)
      ScriptableObjectHelper.addInputFiles(cx, executeScope, src)
      ScriptableObjectHelper.addSyntaxTreeHolder(cx, executeScope, settings)
      cx.evaluateString(executeScope, ScriptResources.ts4sJs, "ts4s.js", 1, null)
    }
  }

  private[this] def getDestInfo(src: File, options: CompileOptions): (File, String) = (options.outOpt, options.outDirOpt) match {
    case (Some(file), _) => (file.getParentFile, getFileName(file))
    case (_, Some(dir)) => (dir, getFileName(src))
    case _ => (src.getParentFile, getFileName(src))
  }

  private[this] def getFileName(file: File): String = {
    file.getName.split("""\.""").init.mkString(".")
  }

  private[this] def getDestFilePath(dir: File, srcName: String, ext: String): File = {
    new File(dir, s"${srcName}.${ext}")
  }

  private[typescript4s] def evalSyntaxTree(
    scope: Scriptable, nameSnapshots: Seq[(String, Object)], settings: Object): Map[File, Future[Object]] = {
    import scala.concurrent.ExecutionContext.Implicits.global

    (nameSnapshots.map {
      case (name, snapshot) =>
        val f = Future {
          withContext { cx =>
            val tmpScope = cx.newObject(scope)
            tmpScope.put("ts4sFilePath", tmpScope, name)
            tmpScope.put("ts4sSnapshot", tmpScope, snapshot)
            tmpScope.put("ts4sSettings", tmpScope, settings)
            cx.evaluateString(
              tmpScope,
              """
              TypeScript.Parser.parse(
                ts4sFilePath,
                TypeScript.SimpleText.fromScriptSnapshot(ts4sSnapshot),
                TypeScript.isDTSFile(ts4sFilePath),
                TypeScript.getParseOptions(ts4sSettings));
              """,
              "syntaxTree.js",
              1,
              null)
          }
        }
        (new File(name) -> f)
    }).toMap
  }

  private[this] def evalSyntaxTree(scope: Scriptable): Map[String, Future[Object]] = {
    import scala.concurrent.ExecutionContext.Implicits.global

    (ScriptResources.defaultLibNames.zipWithIndex map {
      case (name, index) =>
        val syntaxTree = Future {
          withContext { cx =>
            val tmpScope = cx.newObject(scope)
            cx.evaluateString(
              tmpScope,
              s"""
              TypeScript.Parser.parse(
                ts4sDefaultLibs[${index}].name,
                TypeScript.SimpleText.fromScriptSnapshot(ts4sDefaultLibs[${index}].snapshot),
                TypeScript.isDTSFile(ts4sDefaultLibs[${index}].name),
                TypeScript.getParseOptions(TypeScript.ImmutableCompilationSettings.defaultSettings()));
              """,
              "syntaxTree.js",
              1,
              null)
          }
        }
        (name -> syntaxTree)
    }).toMap
  }

  private[this] def evalSourceUnit(scope: Scriptable, fs: Map[String, Future[Object]]): Map[String, Future[Object]] = {
    import scala.concurrent.ExecutionContext.Implicits.global

    (ScriptResources.defaultLibNames map { name =>
      val sourceUnit = fs(name).map { syntaxTree =>
        withContext { cx =>
          val tmpScope = cx.newObject(scope)
          tmpScope.put("ts4sSyntaxTree", tmpScope, syntaxTree)
          cx.evaluateString(
            tmpScope,
            s"""
            ts4sSyntaxTree.sourceUnit().accept(new TypeScript.SyntaxTreeToAstVisitor(
              "${name}",
              ts4sSyntaxTree.lineMap(),
              TypeScript.ImmutableCompilationSettings.defaultSettings()));
            """,
            "sourceUnit.js",
            1,
            null)
        }
      }
      (name -> sourceUnit)
    }).toMap
  }

  private[this] def withContext[A](f: Context => A): A = try {
    val cx = contextFactory.enterContext()
    f(cx)
  } catch {
    case e: WrappedException => throw e.getWrappedException()
    case e: JavaScriptException => throw new TypeScriptCompilerException(e.getMessage, cause = e)
  } finally {
    Context.exit()
  }
}

class TypeScriptCompilerException(messages: String, cause: Throwable = null) extends Exception(messages, cause)
