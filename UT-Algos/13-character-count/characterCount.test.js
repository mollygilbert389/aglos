const { expect } = require("@jest/globals");
const { characterCount } = require("./characterCount");

test("returns an object based on letters in a given string", () => {
    expect(characterCount("Good Morning")).toBe({ g:2, o:3, d:1, " ":1, m:1, r:1, n:2, i:1 })
})