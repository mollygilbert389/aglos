const { permutationSubstringFunc } = require("./permutationSubstring");

test("will return true if the sub string is included in the string", () => {
    const str = "smapnuers";
    const sub = "super";
    expect(permutationSubstringFunc(str,sub)).toBe(true)
})

test("will return true if the sub string is included in the string", () => {
    const str = "another";
    const sub = "fun";
    expect(permutationSubstringFunc(str,sub)).toBe(false)
})