# typescript4s
Scala library to compile [TypeScript](http://www.typescriptlang.org/)

[![Build Status](https://api.travis-ci.org/zaneli/typescript4s.png?branch=master)](https://travis-ci.org/zaneli/typescript4s)

## Usage

* compile
```
import com.zaneli.typescript4s.TypeScriptCompiler

val compiler = new TypeScriptCompiler()
val dest = compiler.compile(new java.io.File("example.ts"))
val destExcludeComments = compiler.compile(new java.io.File("example.ts"), removeComments = true)
compiler.execute("example.ts", "--removeComments")
```
compile method return compiled JavaScript file path.

* show help
```
TypeScriptCompiler.help()
compiler.execute("-h")
compiler.execute("--help")
```

* show version
```
TypeScriptCompiler.version()
compiler.execute("-v")
compiler.execute("--version")
```

## Credit
* typescript4s include tsc.js and lib.d.ts from TypeScript licensed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0)  
* typescript4s consulted [typescript4j](https://github.com/martypitt/typescript4j)