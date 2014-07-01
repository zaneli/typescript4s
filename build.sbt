organization := "com.zaneli"

name := "typescript4s"

version := "0.1.0"

scalaVersion := "2.11.0"

crossScalaVersions := Seq("2.10.4", "2.11.0")

scalacOptions ++= Seq("-encoding", "UTF-8", "-feature", "-deprecation", "-unchecked")

libraryDependencies ++= Seq(
   "com.typesafe.akka" %% "akka-actor" % "2.3.4",
   "commons-io" % "commons-io" % "2.4",
   "org.mozilla" % "rhino" % "1.7R4",
   "org.slf4j" % "slf4j-api" % "1.7.7",
   "org.specs2" %% "specs2" % "2.3.12" % "test"
)
