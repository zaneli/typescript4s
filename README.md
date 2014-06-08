# typescript4s
Scala library to compile [TypeScript](http://www.typescriptlang.org/)

[![Build Status](https://api.travis-ci.org/zaneli/typescript4s.png?branch=master)](https://travis-ci.org/zaneli/typescript4s)

## Usage

```
scala> import com.zaneli.typescript4s.TypeScriptCompiler
import com.zaneli.typescript4s.TypeScriptCompiler

scala> val dest = TypeScriptCompiler.compile(new java.io.File("example.ts"))
dest: Seq[java.io.File] = List(example.js)

scala> val dest = TypeScriptCompiler.compile(new java.io.File("example.ts"), out = new java.io.File("dest.js"))
dest: Seq[java.io.File] = List(dest.js)

scala> val dest = TypeScriptCompiler.compile(new java.io.File("example.ts"), declaration = true, sourcemap = true)
dest: Seq[java.io.File] = List(example.js, example.d.ts, example.js.map)
```

## Credit
* typescript4s include tsc.js and lib.d.ts from TypeScript licensed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0)  
* typescript4s consulted [typescript4j](https://github.com/martypitt/typescript4j)
