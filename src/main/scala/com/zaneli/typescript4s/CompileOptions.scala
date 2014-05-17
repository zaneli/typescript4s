package com.zaneli.typescript4s

import java.io.File

case class CompileOptions(
  private val out: File = null,
  private val outDir: File = null,
  private val mapRoot: File = null,
  private val sourceRoot: File = null,
  private val module: ModuleKind = null,
  private val target: ECMAVersion = null,
  removeComments: Boolean = false,
  noImplicitAny: Boolean = false,
  declaration: Boolean = false,
  sourcemap: Boolean = false) {

  val outOpt = Option(out)
  val outDirOpt = Option(outDir)
  val mapRootOpt = Option(mapRoot)
  val sourceRootOpt = Option(sourceRoot)
  val moduleOpt = Option(module)
  val targetOpt = Option(target)

  private[typescript4s] def mkArgs(src: File): Seq[String] = {
    val args = new scala.collection.mutable.ListBuffer[String]()
    args ++= ((outOpt, outDirOpt) match {
      case (Some(file), _) => List("--out", file.getAbsolutePath)
      case (_, Some(dir)) => List("--outDir", dir.getAbsolutePath)
      case _ => Nil
    })
    args ++= mapRootOpt.map(l => List("--mapRoot", l.getAbsolutePath)).getOrElse(Nil)
    args ++= sourceRootOpt.map(l => List("--sourceRoot", l.getAbsolutePath)).getOrElse(Nil)
    args ++= moduleOpt.map(k => List("--module", k.name)).getOrElse(Nil)
    args ++= targetOpt.map(v => List("--target", v.name)).getOrElse(Nil)
    if (removeComments) args += "--removeComments"
    if (noImplicitAny) args += "--noImplicitAny"
    if (declaration) args += "--declaration"
    if (sourcemap) args += "--sourcemap"
    args += src.getAbsolutePath
    args.toSeq
  }
}

sealed abstract class ModuleKind(val name: String)
object ModuleKind {
  case object CommonJS extends ModuleKind("commonjs")
  case object AMD extends ModuleKind("amd")
}

sealed abstract class ECMAVersion(val name: String)
object ECMAVersion {
  case object ES3 extends ECMAVersion("ES3")
  case object ES5 extends ECMAVersion("ES5")
}
