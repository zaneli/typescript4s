package com.zaneli.typescript4s

import org.apache.commons.io.IOUtils
import scala.io.Source

private[typescript4s] object ScriptResources {

  private[typescript4s] lazy val defaultLibNames: List[String] = lineNums map (i => s"ts4s.lib${i}.d.ts")

  private[typescript4s] lazy val defaultLibs: Map[String, String] = {
    val defaultLib: List[String] = Source.fromInputStream(this.getClass.getResourceAsStream("/tsc/lib.d.ts")).getLines.toList
    require(defaultLib.size == lineNums.last)
    val libs = (0 :: lineNums).zip(lineNums) map {
      case (s, e) =>
        defaultLib.slice(s, e + 1).mkString(System.getProperty("line.separator"))
    }
    defaultLibNames.zip(libs).toMap
  }

  private[typescript4s] lazy val typescriptJs = IOUtils.toString(this.getClass.getResourceAsStream("/tsc/typescript.js"))

  private[this] val lineNums = List(974, 1912, 2832, 3761, 3941, 5912, 6703, 7489, 8425, 9340, 10334, 11215, 12203, 13244, 14152, 14958)
}
