package com.zaneli.typescript4s

import java.io.File
import org.apache.commons.io.FileUtils
import org.specs2.mutable.{ After, Specification }

class TypeScriptCompilerSpec extends Specification {

  "TypeScriptCompiler#compile" should {
    "compile standalone ts file" in new context {
      val src = getPath("/ts/standalone.ts")
      val expectedDest = getDestJsPath(src)
      destFiles += expectedDest
      expectedDest.exists must beFalse

      val actualDests = TypeScriptCompiler(src).compile()
      actualDests must have size 1
      val actualDest = actualDests(0)
      actualDest.getCanonicalPath must_== expectedDest.getCanonicalPath
      getContents(actualDest) must_== getContents("/js/standalone.js")
    }

    "compile ts file that refer to a d.ts file" in new context {
      val src = getPath("/ts/refer-jquery.ts")
      val expectedDest = getDestJsPath(src)
      destFiles += expectedDest
      expectedDest.exists must beFalse

      val actualDests = TypeScriptCompiler(src).compile()
      actualDests must have size 1
      val actualDest = actualDests(0)
      actualDest.getCanonicalPath must_== expectedDest.getCanonicalPath
      getContents(actualDest) must_== getContents("/js/refer-jquery.js")
    }

    "compile ts file that refer to nested d.ts files" in new context {
      val src = getPath("/ts/refer-jquery.tile.ts")
      val expectedDest = getDestJsPath(src)
      destFiles += expectedDest
      expectedDest.exists must beFalse

      val actualDests = TypeScriptCompiler(src).compile()
      actualDests must have size 1
      val actualDest = actualDests(0)
      actualDest.getCanonicalPath must_== expectedDest.getCanonicalPath
      getContents(actualDest) must_== getContents("/js/refer-jquery.tile.js")
    }

    "failed invalid type exists" in new context {
      val src = getPath("/ts/invald.ts")
      val expectedDest = getDestJsPath(src)
      destFiles += expectedDest
      expectedDest.exists must beFalse

      TypeScriptCompiler(src).compile() must throwA[TypeScriptCompilerException]
    }

    "reference no-default-lib=true" in new context {
      {
        val src = getPath("/ts/refer-no-lib-d-ts.ts")
        val expectedDest = getDestJsPath(src)
        destFiles += expectedDest
        expectedDest.exists must beFalse
        TypeScriptCompiler(src).compile() must throwA[TypeScriptCompilerException]
      }
      {
        val src = getPath("/ts/refer-lib-d-ts.ts")
        val expectedDest = getDestJsPath(src)
        destFiles += expectedDest
        expectedDest.exists must beFalse

        val actualDests = TypeScriptCompiler(src).compile()
        actualDests must have size 1
        val actualDest = actualDests(0)
        actualDest.getCanonicalPath must_== expectedDest.getCanonicalPath
        getContents(actualDest) must_== getContents("/js/refer-lib-d-ts.js")
      }
    }

    "option" in {
      "removeComments" in new context {
        val src = getPath("/ts/remove-comments.ts")
        val expectedDest = getDestJsPath(src)
        destFiles += expectedDest
        expectedDest.exists must beFalse

        val actualDests = TypeScriptCompiler(src).removeComments(true).compile()
        actualDests must have size 1
        val actualDest = actualDests(0)
        actualDest.getCanonicalPath must_== expectedDest.getCanonicalPath
        getContents(actualDest) must_== getContents("/js/remove-comments.js")
      }
      "out" in new context {
        val src = getPath("/ts/standalone.ts")
        val tmpDir = System.getProperty("java.io.tmpdir")
        val expectedDest = new File(tmpDir, "standalone-out.js")
        destFiles += expectedDest
        expectedDest.exists must beFalse

        val actualDests = TypeScriptCompiler(src).out(expectedDest).compile()
        actualDests must have size 1
        val actualDest = actualDests(0)
        actualDest.getCanonicalPath must_== expectedDest.getCanonicalPath
        getContents(actualDest) must_== getContents("/js/standalone.js")
      }
      "outdir" in new context {
        val src = getPath("/ts/standalone.ts")
        val tmpDir = System.getProperty("java.io.tmpdir")
        val expectedDest = new File(tmpDir, "standalone.js")
        destFiles += expectedDest
        expectedDest.exists must beFalse

        val actualDests = TypeScriptCompiler(src).outDir(expectedDest.getParentFile).compile()
        actualDests must have size 1
        val actualDest = actualDests(0)
        actualDest.getCanonicalPath must_== expectedDest.getCanonicalPath
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

        val actualDests = TypeScriptCompiler(src).declaration(true).compile()
        actualDests must have size 2
        actualDests.map(_.getCanonicalPath) must contain(expectedDestJs.getCanonicalPath, expectedDestDts.getCanonicalPath)
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

        val actualDests = TypeScriptCompiler(src).sourcemap(true).compile()
        actualDests must have size 2
        actualDests.map(_.getCanonicalPath) must contain(expectedDestJs.getCanonicalPath, expectedDestMap.getCanonicalPath)
        actualDests.map(getContents) must contain(getContents("/js/sourcemap.js"), getContents("/sourcemap/sourcemap.js.map"))
      }
      "target" in new context {
        val src = getPath("/ts/get-set.ts")
        val expectedDest = getDestJsPath(src)
        destFiles += expectedDest
        expectedDest.exists must beFalse

        val compiler = TypeScriptCompiler(src)
        compiler.compile() must throwA[TypeScriptCompilerException]
        expectedDest.exists must beFalse

        compiler.target(ECMAVersion.ES3).compile() must throwA[TypeScriptCompilerException]
        expectedDest.exists must beFalse

        val actualDests = compiler.target(ECMAVersion.ES5).compile()
        actualDests must have size 1
        val actualDest = actualDests(0)
        actualDest.getCanonicalPath must_== expectedDest.getCanonicalPath
        getContents(actualDest) must_== getContents("/js/get-set.js")
      }
      "module" in new context {
        val src = getPath("/ts/import.ts")
        val expectedDestImport = getDestJsPath(src)
        destFiles += expectedDestImport
        expectedDestImport.exists must beFalse
        val expectedDestModule = getDestJsPath(getPath("/ts/module.ts"))
        destFiles += expectedDestModule
        expectedDestModule.exists must beFalse

        val compiler = TypeScriptCompiler(src)
        val actualDestsCommonJS = compiler.module(ModuleKind.CommonJS).compile()
        actualDestsCommonJS must have size 2
        actualDestsCommonJS.map(_.getCanonicalPath) must contain(expectedDestImport.getCanonicalPath, expectedDestModule.getCanonicalPath)
        actualDestsCommonJS.map(getContents) must contain(getContents("/js/import-commonjs.js"), getContents("/js/module-commonjs.js"))

        val actualDestsAMD = compiler.module(ModuleKind.AMD).compile()
        actualDestsAMD must have size 2
        actualDestsAMD.map(_.getCanonicalPath) must contain(expectedDestImport.getCanonicalPath, expectedDestModule.getCanonicalPath)
        actualDestsAMD.map(getContents) must contain(getContents("/js/import-amd.js"), getContents("/js/module-amd.js"))
      }
      "noImplicitAny" in new context {
        val src = getPath("/ts/implicit-any.ts")
        val expectedDest = getDestJsPath(src)
        destFiles += expectedDest
        expectedDest.exists must beFalse

        val compiler = TypeScriptCompiler(src)
        compiler.noImplicitAny(true).compile() must throwA[TypeScriptCompilerException]
        expectedDest.exists must beFalse

        val actualDests = compiler.noImplicitAny(false).compile()
        actualDests must have size 1
        val actualDest = actualDests(0)
        actualDest.getCanonicalPath must_== expectedDest.getCanonicalPath
        getContents(actualDest) must_== getContents("/js/implicit-any.js")
      }
      "nolib" in new context {
        val src = getPath("/ts/refer-lib-d-ts.ts")
        val expectedDest = getDestJsPath(src)
        destFiles += expectedDest
        expectedDest.exists must beFalse

        val compiler = TypeScriptCompiler(src)
        compiler.nolib(true).compile() must throwA[TypeScriptCompilerException]
        expectedDest.exists must beFalse

        val actualDests = compiler.nolib(false).compile()
        actualDests must have size 1
        val actualDest = actualDests(0)
        actualDest.getCanonicalPath must_== expectedDest.getCanonicalPath
        getContents(actualDest) must_== getContents("/js/refer-lib-d-ts.js")
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
