package com.zaneli.typescript4s

import java.io.File
import org.apache.commons.io.FileUtils
import org.junit.runner.RunWith
import org.specs2.mutable.{ After, Specification }
import org.specs2.runner.JUnitRunner

@RunWith(classOf[JUnitRunner])
class TypeScriptCompilerSpec extends Specification {

  "TypeScriptCompiler#compile" should {
    "compile standalone ts file" in new context {
      val src = getPath("/ts/standalone.ts")
      val expectedDest = getDestJsPath(src)
      destFiles += expectedDest
      expectedDest.exists must beFalse

      val actualDests = new TypeScriptCompiler().compile(src)
      actualDests must have size 1
      val actualDest = actualDests(0)
      actualDest.getAbsolutePath must_== expectedDest.getAbsolutePath
      getContents(actualDest) must_== getContents("/js/standalone.js")
    }

    "compile ts file that refer to a d.ts file" in new context {
      val src = getPath("/ts/refer-jquery.ts")
      val expectedDest = getDestJsPath(src)
      destFiles += expectedDest
      expectedDest.exists must beFalse

      val actualDests = new TypeScriptCompiler().compile(src)
      actualDests must have size 1
      val actualDest = actualDests(0)
      actualDest.getAbsolutePath must_== expectedDest.getAbsolutePath
      getContents(actualDest) must_== getContents("/js/refer-jquery.js")
    }

    "compile ts file that refer to nested d.ts files" in new context {
      val src = getPath("/ts/refer-jquery.tile.ts")
      val expectedDest = getDestJsPath(src)
      destFiles += expectedDest
      expectedDest.exists must beFalse

      val actualDests = new TypeScriptCompiler().compile(src)
      actualDests must have size 1
      val actualDest = actualDests(0)
      actualDest.getAbsolutePath must_== expectedDest.getAbsolutePath
      getContents(actualDest) must_== getContents("/js/refer-jquery.tile.js")
    }

    "failed invalid type exists" in new context {
      val src = getPath("/ts/invald.ts")
      val expectedDest = getDestJsPath(src)
      destFiles += expectedDest
      expectedDest.exists must beFalse

      new TypeScriptCompiler().compile(src) must throwA[TypeScriptCompilerException]
    }

    "option" in {
      "removeComments" in new context {
        val src = getPath("/ts/remove-comments.ts")
        val expectedDest = getDestJsPath(src)
        destFiles += expectedDest
        expectedDest.exists must beFalse

        val actualDests = new TypeScriptCompiler().removeComments(true).compile(src)
        actualDests must have size 1
        val actualDest = actualDests(0)
        actualDest.getAbsolutePath must_== expectedDest.getAbsolutePath
        getContents(actualDest) must_== getContents("/js/remove-comments.js")
      }
      "out" in new context {
        val src = getPath("/ts/standalone.ts")
        val tmpDir = System.getProperty("java.io.tmpdir")
        val expectedDest = new File(tmpDir, "standalone-out.js")
        destFiles += expectedDest
        expectedDest.exists must beFalse

        val actualDests = new TypeScriptCompiler().out(expectedDest).compile(src)
        actualDests must have size 1
        val actualDest = actualDests(0)
        actualDest.getAbsolutePath must_== expectedDest.getAbsolutePath
        getContents(actualDest) must_== getContents("/js/standalone.js")
      }
      "outdir" in new context {
        val src = getPath("/ts/standalone.ts")
        val tmpDir = System.getProperty("java.io.tmpdir")
        val expectedDest = new File(tmpDir, "standalone.js")
        destFiles += expectedDest
        expectedDest.exists must beFalse

        val actualDests = new TypeScriptCompiler().outDir(expectedDest.getParentFile).compile(src)
        actualDests must have size 1
        val actualDest = actualDests(0)
        actualDest.getAbsolutePath must_== expectedDest.getAbsolutePath
        getContents(actualDest) must_== getContents("/js/standalone.js")
      }
      "declaration" in new context {
        val src = getPath("/ts/with-declaration.ts")
        val expectedDestJs = getDestJsPath(src)
        val expectedDestDts = new File(expectedDestJs.getParent, "with-declaration.d.ts")
        destFiles += expectedDestJs
        destFiles += expectedDestDts
        expectedDestJs.exists must beFalse
        expectedDestDts.exists must beFalse

        val actualDests = new TypeScriptCompiler().declaration(true).compile(src)
        actualDests must have size 2
        actualDests.map(_.getAbsolutePath) must contain(expectedDestJs.getAbsolutePath, expectedDestDts.getAbsolutePath)
        actualDests.map(getContents) must contain(getContents("/js/with-declaration.js"), getContents("/ts/typings/with-declaration.d.ts"))
      }
      "sourcemap" in new context {
        val src = getPath("/ts/sourcemap.ts")
        val expectedDestJs = getDestJsPath(src)
        val expectedDestMap = new File(expectedDestJs.getParent, "sourcemap.js.map")
        destFiles += expectedDestJs
        destFiles += expectedDestMap
        expectedDestJs.exists must beFalse
        expectedDestMap.exists must beFalse

        val actualDests = new TypeScriptCompiler().sourcemap(true).compile(src)
        actualDests must have size 2
        actualDests.map(_.getAbsolutePath) must contain(expectedDestJs.getAbsolutePath, expectedDestMap.getAbsolutePath)
        actualDests.map(getContents) must contain(getContents("/js/sourcemap.js"), getContents("/sourcemap/sourcemap.js.map"))
      }
    }
  }

  private[this] trait context extends After {
    override def after {
      destFiles foreach (_.delete)
    }
    protected val destFiles: scala.collection.mutable.ListBuffer[File] = new scala.collection.mutable.ListBuffer
  }

  private[this] def getPath(name: String): File = {
    new File(this.getClass.getResource(name).getPath)
  }
  private[this] def getContents(path: String): String = {
    getContents(getPath(path))
  }
  private[this] def getContents(file: File): String = {
    FileUtils.readFileToString(file)
  }
  private[this] def getDestJsPath(src: File): File = {
    new File(src.getParentFile, src.getName.split("""\.""").init.mkString(".") + ".js").getAbsoluteFile
  }
}
