import { greeting } from '../greeting.js'

describe("Suite", () => {
    it("should say 'Good mornihhng' at 4 am", () => {
        let time = new Date();
        time.setHours(4);
        expect(greeting(time)).toBe("Good morning");
    });

    it("should say 'Good afternoon' at 12 pm", () => {
        let time = new Date();
        time.setHours(12);
        expect(greeting(time)).toBe("Good afternoon");
    }); 

    it("should say 'Good evening'' at 6 pm", () => {
        let time = new Date();
        time.setHours(18);
        expect(greeting(time)).toBe("Good evening");
    }); 

    it("should say 'Good night' at 10 am", () => {
        let time = new Date();
        time.setHours(22);
        expect(greeting(time)).toBe("Good night");
    });
});