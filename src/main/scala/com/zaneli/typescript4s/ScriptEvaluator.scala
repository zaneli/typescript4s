package com.zaneli.typescript4s

import com.zaneli.typescript4s.ScriptableObjectHelper.{ addEnv, addHost, addDefaultLibInfo, addUtil }
import org.mozilla.javascript.{ Context, ContextFactory, JavaScriptException, Scriptable, Undefined, WrappedException }
import org.mozilla.javascript.tools.shell.Global
import scala.concurrent.Future

private[typescript4s] object ScriptEvaluator {
  private[this] lazy val contextFactory = new ContextFactory()
  private[typescript4s] lazy val globalScope = init()

  private[this] def init(): Scriptable = withContext { cx =>
    cx.setOptimizationLevel(-1)
    cx.setLanguageVersion(Context.VERSION_1_7)
    val global = new Global()
    global.init(cx)
    val scope = cx.initStandardObjects(global)
    cx.evaluateString(scope, ScriptResources.typescriptJs, "typescript.js", 1, null)
    addHost(cx, scope)
    addEnv(cx, scope)
    addDefaultLibInfo(cx, scope)

    val syntaxTree = evalSyntaxTree(scope)
    val sourceUnit = evalSourceUnit(scope, syntaxTree)
    addUtil(cx, scope, syntaxTree, sourceUnit)
    scope
  }

  private[typescript4s] def withContext[A](f: Context => A): A = try {
    val cx = contextFactory.enterContext()
    f(cx)
  } catch {
    case e: WrappedException => throw e.getWrappedException()
    case e: JavaScriptException => throw new TypeScriptCompilerException(e.getMessage, cause = e)
  } finally {
    Context.exit()
  }

  private[typescript4s] def evalScriptSnapshot(cx: Context, scope: Scriptable, content: String): Object = {
    val tmpScope = cx.newObject(scope)
    tmpScope.put(s"content", tmpScope, content)
    cx.evaluateString(tmpScope, "TypeScript.ScriptSnapshot.fromString(content);", "scriptSnapshot.js", 1, null)
  }

  private[typescript4s] def evalSyntaxTree(
    scope: Scriptable, name: String, content: String, settings: Option[Object] = None): Future[Object] = {
    import scala.concurrent.ExecutionContext.Implicits.global
    Future {
      withContext { cx =>
        val tmpScope = cx.newObject(scope)
        tmpScope.put("ts4sFilePath", tmpScope, name)
        tmpScope.put("ts4sContent", tmpScope, content)
        tmpScope.put("ts4sSettings", tmpScope, settings.getOrElse(Undefined.instance))
        cx.evaluateString(
          tmpScope,
          """
          TypeScript.Parser.parse(
            TypeScript.switchToForwardSlashes(ts4sFilePath),
            TypeScript.SimpleText.fromString(ts4sContent),
            TypeScript.isDTSFile(ts4sFilePath),
            TypeScript.getParseOptions(ts4sSettings || TypeScript.ImmutableCompilationSettings.defaultSettings()));
          """,
          "syntaxTree.js",
          1,
          null)
      }
    }
  }

  private[typescript4s] def evalSourceUnit(
    scope: Scriptable, syntaxTree: Future[Object], settings: Option[Object] = None): Future[Object] = {
    import scala.concurrent.ExecutionContext.Implicits.global
    syntaxTree map { s =>
      withContext { cx =>
        val tmpScope = cx.newObject(scope)
        tmpScope.put("ts4sSyntaxTree", tmpScope, s)
        tmpScope.put("ts4sSettings", tmpScope, settings.getOrElse(Undefined.instance))
        cx.evaluateString(
          tmpScope,
          """
          ts4sSyntaxTree.sourceUnit().accept(new TypeScript.SyntaxTreeToAstVisitor(
            ts4sSyntaxTree.fileName(),
            ts4sSyntaxTree.lineMap(),
            ts4sSettings || TypeScript.ImmutableCompilationSettings.defaultSettings()));
          """,
          "sourceUnit.js",
          1,
          null)
      }
    }
  }

  private[this] def evalSyntaxTree(scope: Scriptable): Map[String, Future[Object]] = {
    (ScriptResources.defaultLibNames.zipWithIndex map {
      case (name, index) =>
        val syntaxTree = evalSyntaxTree(scope, name, ScriptResources.defaultLibs(name))
        (name -> syntaxTree)
    }).toMap
  }

  private[this] def evalSourceUnit(scope: Scriptable, fs: Map[String, Future[Object]]): Map[String, Future[Object]] = {
    (ScriptResources.defaultLibNames map (name => (name -> evalSourceUnit(scope, fs(name))))).toMap
  }
}
