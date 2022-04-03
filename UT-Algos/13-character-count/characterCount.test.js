const { expect } = require("@jest/globals");
const { characterCount, altCharacherCount } = require("./characterCount");

test("returns an object based on letters in a given string", () => {
    expect(characterCount("Good Morning")).toStrictEqual({ g:2, o:3, d:1, " ":1, m:1, r:1, n:2, i:1 })
})

test("returns an object based on letters in a given string", () => {
    expect(altCharacherCount("Good Morning")).toStrictEqual({ g:2, o:3, d:1, " ":1, m:1, r:1, n:2, i:1 })
})