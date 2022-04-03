const { expect } = require("@jest/globals");
const { isPalendrom } = require("./isPalendrom");

test("returns true if a string is a palendrom", () => {
    expect(isPalendrom("racecar")).toBe(true);
})