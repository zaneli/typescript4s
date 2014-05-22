// define Greeter
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
})();

// create Greeter
var greeter = new Greeter("world");

var button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function () {
    alert(greeter.greet());
};

document.body.appendChild(button);
//# sourceMappingURL=sourcemap.js.map
