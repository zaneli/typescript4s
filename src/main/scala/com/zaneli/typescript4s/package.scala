package com.zaneli

import org.mozilla.javascript.{ Context, Scriptable }

package object typescript4s {

  /**
   * { referencedFiles: NativeArray, importedFiles: NativeArray, isLibFile: Boolean, diagnostics: NativeArray }
   */
  private[typescript4s]type PreprocessedFileInformation = Object

  private[typescript4s]type ScriptSnapshot = Object

  private[typescript4s]type SyntaxTree = Object

  private[typescript4s]type SourceUnit = Object

  private[typescript4s]type Document = Object

  private[typescript4s]type ImmutableSettings = Object

  private[typescript4s] implicit class SimpleContext(cx: Context) {
    def evaluateString(scope: Scriptable, source: String, sourceName: String): Object =
      cx.evaluateString(scope, source, sourceName, 1, null)
  }
}
