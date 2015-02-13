package com.zaneli.typescript4s

import java.io.InputStreamReader
import org.apache.commons.io.{ IOUtils, LineIterator }
import scala.collection.JavaConversions._
import scala.io.Source

object ScriptResources {

  private[typescript4s] lazy val defaultLibNames: List[String] =
    libDTs.name :: libES6DTs.name :: libDTss.map(_.name) ++ libES6DTss.map(_.name)

  private[typescript4s] lazy val libDTs =
    ScriptResource(
      "lib.d.ts",
      IOUtils.toString(this.getClass.getResourceAsStream("/tsc/lib.d.ts")))

  private[typescript4s] lazy val libDTss: List[ScriptResource] = {
    val lines = Source.fromInputStream(this.getClass.getResourceAsStream("/tsc/lib.d.ts")).getLines.toList
    val nums = List(1781, 3583, 5358, 7104, 8858, 10662, 12438, lines.size)
    (15 :: nums).zip(nums) map {
      case (s, e) => {
        ScriptResource(s"lib_${s}.d.ts", lines.slice(s, e).mkString(System.getProperty("line.separator")))
      }
    }
  }

  private[typescript4s] lazy val libES6DTs =
    ScriptResource(
      "lib.es6.d.ts",
      IOUtils.toString(this.getClass.getResourceAsStream("/tsc/lib.es6.d.ts")))

  private[typescript4s] lazy val libES6DTss: List[ScriptResource] = {
    using(IOUtils.lineIterator(new InputStreamReader(this.getClass.getResourceAsStream("/tsc/lib.es6.d.ts"))), { itr =>
      val lines = itr.toList
      val nums = List(2145, 4302, 6478, 8595, 10750, 12804, 15054, lines.size)
      (15 :: nums).zip(nums) map {
        case (s, e) => {
          ScriptResource(s"lib.es6_${s}.d.ts", lines.slice(s, e).mkString(System.getProperty("line.separator")))
        }
      }
    })
  }

  private[typescript4s] lazy val typescriptServices =
    ScriptResource(
      "typescriptServices.js",
      IOUtils.toString(this.getClass.getResourceAsStream("/tsc/typescriptServices.js")))

  private[this] def using[A](itr: LineIterator, f: (LineIterator => A)): A = {
    try {
      f(itr)
    } finally {
      itr.close()
    }
  }
}

private[typescript4s] case class ScriptResource(name: String, content: String)
