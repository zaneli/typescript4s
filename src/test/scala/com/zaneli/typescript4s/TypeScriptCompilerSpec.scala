package com.zaneli.typescript4s

import java.io.File
import org.apache.commons.io.FileUtils
import org.junit.runner.RunWith
import org.specs2.mutable.{ After, Specification }
import org.specs2.runner.JUnitRunner

@RunWith(classOf[JUnitRunner])
class TypeScriptCompilerSpec extends Specification {

  "TypeScriptCompiler#compile" should {
    val compiler = new TypeScriptCompiler()

    "compile standalone ts file" in new context {
      val src = getPath("/ts/standalone.ts")
      val expectedDest = getDestJsPath(src)
      destFiles += expectedDest
      expectedDest.exists must beFalse

      val actualDests = compiler.compile(src)
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

      val actualDests = compiler.compile(src)
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

      val actualDests = compiler.compile(src)
      actualDests must have size 1
      val actualDest = actualDests(0)
      actualDest.getAbsolutePath must_== expectedDest.getAbsolutePath
      getContents(actualDest) must_== getContents("/js/refer-jquery.tile.js")
    }

    "option" in {
      "removeComments" in new context {
        val src = getPath("/ts/remove-comments.ts")
        val expectedDest = getDestJsPath(src)
        destFiles += expectedDest
        expectedDest.exists must beFalse

        val actualDests = compiler.compile(src, removeComments = true)
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

        val actualDests = compiler.compile(src, out = expectedDest)
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

        val actualDests = compiler.compile(src, outDir = expectedDest.getParentFile)
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

        val actualDests = compiler.compile(src, declaration = true)
        actualDests must have size 2
        val actualDestJs = actualDests(0)
        actualDestJs.getAbsolutePath must_== expectedDestJs.getAbsolutePath
        getContents(actualDestJs) must_== getContents("/js/with-declaration.js")
        val actualDestDts = actualDests(1)
        actualDestDts.getAbsolutePath must_== expectedDestDts.getAbsolutePath
        getContents(actualDestDts) must_== getContents("/ts/typings/with-declaration.d.ts")
      }
      "sourcemap" in new context {
        val src = getPath("/ts/sourcemap.ts")
        val expectedDestJs = getDestJsPath(src)
        val expectedDestMap = new File(expectedDestJs.getParent, "sourcemap.js.map")
        destFiles += expectedDestJs
        destFiles += expectedDestMap
        expectedDestJs.exists must beFalse
        expectedDestMap.exists must beFalse

        val actualDests = compiler.compile(src, sourcemap = true)
        actualDests must have size 2
        val actualDestJs = actualDests(0)
        actualDestJs.getAbsolutePath must_== expectedDestJs.getAbsolutePath
        getContents(actualDestJs) must_== getContents("/js/sourcemap.js")
        val actualDestMap = actualDests(1)
        actualDestMap.getAbsolutePath must_== expectedDestMap.getAbsolutePath
        getContents(actualDestMap) must_== getContents("/sourcemap/sourcemap.js.map")
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
