organization := "com.zaneli"

name := "typescript4s"

version := "0.1.0"

scalaVersion := "2.11.0"

crossScalaVersions := Seq("2.10.4", "2.11.0")

scalacOptions ++= Seq("-encoding", "UTF-8", "-feature", "-deprecation", "-unchecked")

libraryDependencies ++= Seq(
   "org.mozilla" % "rhino" % "1.7R4",
   "commons-io" % "commons-io" % "2.4",
   "org.slf4s" %% "slf4s-api" % "1.7.7",
   "ch.qos.logback" % "logback-classic" % "1.1.2",
   "org.specs2" %% "specs2" % "2.3.12" % "test"
)