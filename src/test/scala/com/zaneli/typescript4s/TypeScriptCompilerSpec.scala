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

      val actualDest = TypeScriptCompiler.compile(src)
      actualDest.getAbsolutePath must_== expectedDest.getAbsolutePath
      getContents(actualDest) must_== getContents("/js/standalone.js")
    }

    "compile ts file that refer to a d.ts file" in new context {
      val src = getPath("/ts/refer-jquery.ts")
      val expectedDest = getDestJsPath(src)
      destFiles += expectedDest
      expectedDest.exists must beFalse

      val actualDest = TypeScriptCompiler.compile(src)
      actualDest.getAbsolutePath must_== expectedDest.getAbsolutePath
      getContents(actualDest) must_== getContents("/js/refer-jquery.js")
    }

    "compile ts file that refer to nested d.ts files" in new context {
      val src = getPath("/ts/refer-jquery.tile.ts")
      val expectedDest = getDestJsPath(src)
      destFiles += expectedDest
      expectedDest.exists must beFalse

      val actualDest = TypeScriptCompiler.compile(src)
      actualDest.getAbsolutePath must_== expectedDest.getAbsolutePath
      getContents(actualDest) must_== getContents("/js/refer-jquery.tile.js")
    }

    "option" in {
      "removeComments" in new context {
        val src = getPath("/ts/remove-comments.ts")
        val expectedDest = getDestJsPath(src)
        destFiles += expectedDest
        expectedDest.exists must beFalse

        val actualDest = TypeScriptCompiler.compile(src, removeComments = true)
        actualDest.getAbsolutePath must_== expectedDest.getAbsolutePath
        getContents(actualDest) must_== getContents("/js/remove-comments.js")
      }
      "out" in new context {
        val src = getPath("/ts/standalone.ts")
        val tmpDir = System.getProperty("java.io.tmpdir")
        val expectedDest = new File(tmpDir, "standalone-out.js")
        destFiles += expectedDest
        expectedDest.exists must beFalse

        val actualDest = TypeScriptCompiler.compile(src, out = expectedDest)
        actualDest.getAbsolutePath must_== expectedDest.getAbsolutePath
        getContents(actualDest) must_== getContents("/js/standalone.js")
      }
      "outdir" in new context {
        val src = getPath("/ts/standalone.ts")
        val tmpDir = System.getProperty("java.io.tmpdir")
        val expectedDest = new File(tmpDir, "standalone.js")
        destFiles += expectedDest
        expectedDest.exists must beFalse

        val actualDest = TypeScriptCompiler.compile(src, outDir = expectedDest.getParentFile)
        actualDest.getAbsolutePath must_== expectedDest.getAbsolutePath
        getContents(actualDest) must_== getContents("/js/standalone.js")
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
