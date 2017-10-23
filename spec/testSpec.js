"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greeting_js_1 = require("../greeting.js");
describe("Suite", function () {
    it("should say 'Good mornihhng' at 4 am", function () {
        var time = new Date();
        time.setHours(4);
        expect(greeting_js_1.greeting(time)).toBe("Good morning");
    });
    it("should say 'Good afternoon' at 12 pm", function () {
        var time = new Date();
        time.setHours(12);
        expect(greeting_js_1.greeting(time)).toBe("Good afternoon");
    });
    it("should say 'Good evening'' at 6 pm", function () {
        var time = new Date();
        time.setHours(18);
        expect(greeting_js_1.greeting(time)).toBe("Good evening");
    });
    it("should say 'Good night' at 10 am", function () {
        var time = new Date();
        time.setHours(22);
        expect(greeting_js_1.greeting(time)).toBe("Good night");
    });
});
