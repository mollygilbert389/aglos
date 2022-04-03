const { expect } = require("@jest/globals");
const { vowelCount } = require("./vowelCount");

test("test returns the number of vowels in a string", () => {
    expect(vowelCount("pumpkin")).toBe(2);
})

test("test returns the number of vowels in a string", () => {
    expect(vowelCount("USA")).toBe(2);
})