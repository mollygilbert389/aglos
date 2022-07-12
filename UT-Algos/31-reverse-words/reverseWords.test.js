const { reverseWordsFunc, altReverseWordsFunc } = require("./reverseWords");

test("will reverse a string", () => {
    const str = "just keep swimming"
    expect(reverseWordsFunc(str)).toEqual("gnimmiws peek tsuj")
})

test("will reverse a string", () => {
    const str = "just keep swimming"
    expect(altReverseWordsFunc(str)).toEqual("gnimmiws peek tsuj")
})