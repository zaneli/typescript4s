package com.zaneli.typescript4s

import org.mozilla.javascript.FunctionObject

private[typescript4s] object TypeScript4sEnvironment {

  lazy val newLine: String = System.getProperty("line.separator")

  def supportsCodePage(): Boolean = false
}
