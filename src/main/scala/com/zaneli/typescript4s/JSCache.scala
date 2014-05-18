package com.zaneli.typescript4s

import org.mozilla.javascript.{ NativeObject, Undefined }

object JSCache {

  private[this] val parseResultCache = collection.mutable.Map[String, NativeObject]()

  def putParseResult(fileName: String, obj: NativeObject): Unit = synchronized {
    parseResultCache.put(fileName, obj)
  }

  def getParseResult(fileName: String): Object = synchronized {
    parseResultCache.get(fileName).getOrElse(Undefined.instance)
  }
}
