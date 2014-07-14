package com.zaneli.typescript4s

import java.io.File

case class CompileOptions(
  private val out: File = null,
  private val outDir: File = null,
  private val mapRoot: File = null,
  private val sourceRoot: File = null,
  module: ModuleKind = ModuleKind.Unspecified,
  target: ECMAVersion = ECMAVersion.ES3,
  removeComments: Boolean = false,
  noImplicitAny: Boolean = false,
  declaration: Boolean = false,
  sourcemap: Boolean = false,
  nolib: Boolean = false) {

  val outOpt = Option(out)
  val outDirOpt = Option(outDir)
  val mapRootOpt = Option(mapRoot)
  val sourceRootOpt = Option(sourceRoot)
}

sealed abstract class ModuleKind(val code: Int, val name: String)
object ModuleKind {
  case object Unspecified extends ModuleKind(0, "Unspecified") // Unspecified
  case object CommonJS extends ModuleKind(1, "commonjs") // Synchronous
  case object AMD extends ModuleKind(2, "amd") // Asynchronous
}

sealed abstract class ECMAVersion(val code: Int, val name: String)
object ECMAVersion {
  case object ES3 extends ECMAVersion(0, "ES3") // EcmaScript3
  case object ES5 extends ECMAVersion(1, "ES5") // EcmaScript5

  def apply(code: Int): ECMAVersion = code match {
    case ES3.code => ES3
    case ES5.code => ES5
    case _ => throw new IllegalArgumentException(s"Invalid ECMAVersion (${code}).")
  }
}
