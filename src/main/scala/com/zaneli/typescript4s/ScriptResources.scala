package com.zaneli.typescript4s

import org.apache.commons.io.IOUtils

private[typescript4s] object ScriptResources {
  private[typescript4s] val defaultLibName = "ts4s.lib.d.ts"
  private[typescript4s] lazy val tsServices = IOUtils.toString(this.getClass.getResourceAsStream("/tsc/typescriptServices.js"))
  private[typescript4s] lazy val ts4s = IOUtils.toString(this.getClass.getResourceAsStream("/tsc/ts4s.js"))
  private[typescript4s] lazy val defaultLib = IOUtils.toString(this.getClass.getResourceAsStream("/tsc/lib.d.ts"))
}
