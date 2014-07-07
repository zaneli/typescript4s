define(["require", "exports", "./module"], function(require, exports, m1) {
    var v = m1.fooVariable;

    var f = m1.fooFunction();

    var c = new m1.FooClass;

    var Foo = (function () {
        function Foo() {
        }
        Foo.prototype.bar = function () {
            return "TypeScript";
        };
        return Foo;
    })();

    var m = m1.FooModule.bar;
});
