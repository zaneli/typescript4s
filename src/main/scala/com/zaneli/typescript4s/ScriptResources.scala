package com.zaneli.typescript4s

import org.apache.commons.io.IOUtils

private[typescript4s] object ScriptResources {
  private[typescript4s] lazy val libDTs =
    ScriptResource(
      "lib.d.ts",
      IOUtils.toString(this.getClass.getResourceAsStream("/tsc/lib.d.ts")))

  private[typescript4s] lazy val libES6DTs =
    ScriptResource(
      "lib.es6.d.ts",
      IOUtils.toString(this.getClass.getResourceAsStream("/tsc/lib.es6.d.ts")))

  private[typescript4s] lazy val typescriptServices =
    ScriptResource(
      "typescriptServices.js",
      IOUtils.toString(this.getClass.getResourceAsStream("/tsc/typescriptServices.js")))
}

private[typescript4s] case class ScriptResource(name: String, content: String)