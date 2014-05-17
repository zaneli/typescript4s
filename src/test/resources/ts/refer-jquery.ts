/// <reference path="typings/jquery/jquery.d.ts" />

// comment
class Greeter {
    private greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    public greet(): string {
        return "Hello, " + this.greeting;
    }
}
// comment

var greeter: Greeter = new Greeter("TypeScript");

$("div").html(greeter.greet());
