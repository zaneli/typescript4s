package com.zaneli.typescript4s

import com.zaneli.typescript4s.ScriptableObjectHelper._
import java.io.File
import org.apache.commons.io.FileUtils
import org.mozilla.javascript._
import org.mozilla.javascript.ScriptableObject.putProperty
import org.mozilla.javascript.tools.shell.Global
import scala.collection.JavaConversions._

private[typescript4s] object ScriptEvaluator {
  private[this] lazy val contextFactory = new ContextFactory()
  private[this] lazy val (globalScope, ts4sHost) = init()

  private[this] def init(): (Scriptable, Scriptable) = withContext { cx =>
    cx.setOptimizationLevel(-1)
    cx.setLanguageVersion(Context.VERSION_1_7)
    val global = new Global()
    global.init(cx)
    val scope = cx.initStandardObjects(global)
    cx.evaluateString(scope, ScriptResources.typescriptServices.content, ScriptResources.typescriptServices.name)
    addUtil(cx, scope)
    (scope, createHost(cx, scope))
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

  private[typescript4s] def compile(src: Seq[File], options: CompileOptions): Seq[File] = {
    val outputFiles: scala.collection.mutable.ListBuffer[File] = new scala.collection.mutable.ListBuffer()

    withContext { cx =>
      val executeScope = cx.newObject(globalScope)
      addRuntimeInfo(ts4sHost, executeScope, outputFiles)
      setCompilerOptions(cx, executeScope, options)
      putProperty(
        executeScope,
        "fileNames",
        cx.newArray(executeScope, src.map(_.getCanonicalPath.asInstanceOf[Object]).toArray))
      cx.evaluateString(
        executeScope,
        """
        var program = ts.createProgram(fileNames, ts4sCompileOptions, ts4sHost);
        var errors = program.getDiagnostics();
        var exitStatus;
        if (errors.length) {
            exitStatus = 1 /* AllOutputGenerationSkipped */;
        } else {
            var checker = program.getTypeChecker(true);
            errors = checker.getDiagnostics();
            if (checker.isEmitBlocked()) {
                exitStatus = 1 /* AllOutputGenerationSkipped */;
            } else {
                var emitOutput = checker.emitFiles();
                var emitErrors = emitOutput.diagnostics;
                exitStatus = emitOutput.emitResultStatus;
                errors = ts.concatenate(errors, emitErrors);
            }
        }
        
        var errorMsg = "";
        for (var i = 0; i < errors.length; i++) {
            if (errorMsg.length > 0) {
                errorMsg += ts4sHost.getNewLine();
            }
            var diagnostic = errors[i]
            if (diagnostic.file) {
                var loc = diagnostic.file.getLineAndCharacterFromPosition(diagnostic.start);
                errorMsg += diagnostic.file.filename + "(" + loc.line + "," + loc.character + "): ";
            }
            var category = ts.DiagnosticCategory[diagnostic.category].toLowerCase();
            errorMsg += category + " TS" + diagnostic.code + ": " + diagnostic.messageText;
        }
        """,
        "compile.js")
      val errorMsg = executeScope.get("errorMsg", executeScope).toString
      if (errorMsg.nonEmpty) {
        throw new TypeScriptCompilerException(errorMsg)
      }
      val exitStatus = executeScope.get("exitStatus", executeScope).asInstanceOf[Double].toInt
      if (exitStatus != 0) {
        throw new TypeScriptCompilerException(s"invalid exitStatus: ${exitStatus}")
      }
    }
    outputFiles.toList
  }

  private[typescript4s] def createSourceFile(
    scope: Scriptable, filename: String, text: String, version: ECMAVersion): Object = {
    withContext(createSourceFile(_, scope, filename, text, version))
  }

  private[typescript4s] def createSourceFile(
    cx: Context, scope: Scriptable, filename: String, text: String, version: ECMAVersion): Object = {
    val tmpScope = cx.newObject(scope)
    tmpScope.put("filename", tmpScope, filename)
    tmpScope.put("text", tmpScope, text)
    tmpScope.put("languageVersion", tmpScope, version.code)
    cx.evaluateString(tmpScope, """ts.createSourceFile(filename, text, languageVersion, "0")""", "createSourceFile.js")
  }
}
