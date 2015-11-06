organization := "com.zaneli"

name := "typescript4s"

version := "0.0.2"

scalaVersion := "2.11.7"

crossScalaVersions := Seq("2.10.6", "2.11.7")

scalacOptions ++= Seq("-encoding", "UTF-8", "-feature", "-deprecation", "-unchecked")

libraryDependencies ++= Seq(
   "com.typesafe.akka" %% "akka-actor" % "2.3.9",
   "commons-io" % "commons-io" % "2.4",
   "org.mozilla" % "rhino" % "1.7R5",
   "org.slf4j" % "slf4j-api" % "1.7.10",
   "org.specs2" %% "specs2-core" % "2.4.15" % "test"
)

publishMavenStyle := true

publishArtifact in Test := false

pomIncludeRepository := { _ => false }

publishTo := Some(Resolver.file("file",  new File(Path.userHome.absolutePath + "/.m2/repository")))
