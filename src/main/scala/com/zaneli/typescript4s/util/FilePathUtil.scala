package com.zaneli.typescript4s.util

import java.io.File
import java.nio.file.{ Path, WatchEvent }

private[typescript4s] object FilePathUtil {

  private[typescript4s] def toFile(dir: Path, event: WatchEvent[_]): File = {
    dir.resolve(event.context.asInstanceOf[Path]).toFile
  }
}
