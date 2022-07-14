const { altValidBracketsFunc, validBracketsFunc } = require("./validBrackets");

test("will check to see if there are valid pairs of brackets", () => {
    const str = "( )";
    expect(altValidBracketsFunc(str)).toBe(true)
})

test("will check to see if there are valid pairs of brackets", () => {
    const str = "{ } [ ( [] ) ]";
    expect(altValidBracketsFunc(str)).toBe(true)
})

test("will check to see if there are valid pairs of brackets", () => {
    const str = "( [ ) ]";
    expect(altValidBracketsFunc(str)).toBe(false)
})

test("will check to see if there are valid pairs of brackets", () => {
    const str = "( [ ]";
    expect(altValidBracketsFunc(str)).toBe(false)
})

test("will check to see if there are valid pairs of brackets", () => {
    const str = "( )";
    expect(validBracketsFunc(str)).toBe(true)
})

test("will check to see if there are valid pairs of brackets", () => {
    const str = "{ } [ ( [] ) ]";
    expect(validBracketsFunc(str)).toBe(true)
})

test("will check to see if there are valid pairs of brackets", () => {
    const str = "( [ ) ]";
    expect(validBracketsFunc(str)).toBe(false)
})

test("will check to see if there are valid pairs of brackets", () => {
    const str = "( [ ]";
    expect(validBracketsFunc(str)).toBe(false)
})

test("will check to see if there are valid pairs of brackets", () => {
    const str = "( [ ) } ]";
    expect(validBracketsFunc(str)).toBe(false)
})

test("will check to see if there are valid pairs of brackets", () => {
    const str = "( { } } } )";
    expect(validBracketsFunc(str)).toBe(false)
})