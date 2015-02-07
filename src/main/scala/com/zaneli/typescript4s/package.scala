package com.zaneli

import org.mozilla.javascript.{ Context, Scriptable }

package object typescript4s {

  private[typescript4s]type SourceFile = Object

  private[typescript4s] implicit class SimpleContext(cx: Context) {
    def evaluateString(scope: Scriptable, source: String, sourceName: String): Object =
      cx.evaluateString(scope, source, sourceName, 1, null)
  }
}
