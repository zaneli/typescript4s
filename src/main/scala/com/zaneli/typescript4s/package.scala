package com.zaneli

import akka.actor.ActorSystem
import akka.util.Timeout
import org.mozilla.javascript.{ Context, Scriptable }
import scala.concurrent.duration._
import scala.language.postfixOps

package object typescript4s {

  private[typescript4s] val as = ActorSystem.create()
  sys addShutdownHook {
    as.shutdown()
  }
  implicit val timeout = Timeout(10 minutes)

  private[typescript4s]type SourceFile = Object

  private[typescript4s] implicit class SimpleContext(cx: Context) {
    def evaluateString(scope: Scriptable, source: String, sourceName: String): Object =
      cx.evaluateString(scope, source, sourceName, 1, null)
  }
}
