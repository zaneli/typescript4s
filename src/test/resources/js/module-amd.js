define(["require", "exports"], function(require, exports) {
    exports.fooVariable = "TypeScript";

    function fooFunction() {
        return "TypeScript";
    }
    exports.fooFunction = fooFunction;

    var FooClass = (function () {
        function FooClass() {
        }
        FooClass.prototype.bar = function () {
            return "TypeScript";
        };
        return FooClass;
    })();
    exports.FooClass = FooClass;

    (function (FooModule) {
        FooModule.bar = "TypeScript";
    })(exports.FooModule || (exports.FooModule = {}));
    var FooModule = exports.FooModule;
});
