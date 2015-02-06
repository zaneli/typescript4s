/// <reference path="typings/jquery/jquery.d.ts" />
// comment
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
})();
// comment
var greeter = new Greeter("TypeScript");
$("div").html(greeter.greet());
