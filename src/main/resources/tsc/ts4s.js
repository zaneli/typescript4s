(function(){
  TypeScript.Environment = ts4sEnv;
  var logger = new TypeScript.NullLogger();
  var compiler = new TypeScript.TypeScriptCompiler(logger, ts4sSettings);

  ts4sDefaultLibs.forEach(function (lib) {
    compiler.addFile(lib.name, lib.snapshot, TypeScript.ByteOrderMark.None, 0, false, []);
  });

  var result = TypeScript.ReferenceResolver.resolve(ts4sInputFiles, ts4sHost);
  result.diagnostics.forEach(function (d) {
    if (d.info().category === TypeScript.DiagnosticCategory.Error) {
      throw d.message();
    }
  });

  ts4sPrepareResource.load(result.resolvedFiles);
  compiler.ts4sPrepareResource = ts4sPrepareResource;

  result.resolvedFiles.forEach(function (f) {
    compiler.addFile(f.path, ts4sHost.getScriptSnapshot(f.path), TypeScript.ByteOrderMark.None, 0, false, []);
  });
  for (var it = compiler.compile(function (path) { return path; }); it.moveNext();) {
    var result = it.current();
    result.diagnostics.forEach(function (d) {
      if (d.info().category === TypeScript.DiagnosticCategory.Error) {
        throw d.message();
      }
    });
    result.outputFiles.forEach(function (f) {
      TypeScript.Environment.writeFile(f.name, f.text, TypeScript.ByteOrderMark.None);
    });
  }
})();