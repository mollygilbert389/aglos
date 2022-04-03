const { expect } = require("@jest/globals");
const { factorial } = require("./factorial");

test("function that returns the factorial of a given number", () => {
    expect(factorial(3)).toBe(6)
})