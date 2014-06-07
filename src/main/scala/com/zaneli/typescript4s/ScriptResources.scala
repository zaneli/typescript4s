package com.zaneli.typescript4s

import org.apache.commons.io.IOUtils

private[typescript4s] object ScriptResources {
  private[typescript4s] val defaultLibNames: Seq[String] = (0 to 15) map (i => f"ts4s.lib${i}%02d.d.ts")
  private[typescript4s] lazy val defaultLibs: Map[String, String] = (defaultLibNames map { name =>
    (name -> IOUtils.toString(this.getClass.getResourceAsStream(s"/tsc/${name}")))
  }).toMap

  private[typescript4s] lazy val tsServices = IOUtils.toString(this.getClass.getResourceAsStream("/tsc/typescriptServices.js"))
  private[typescript4s] lazy val ts4s = IOUtils.toString(this.getClass.getResourceAsStream("/tsc/ts4s.js"))
}
