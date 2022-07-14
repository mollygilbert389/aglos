const { isArmstrongFunc, altIsArmstrongFunc } = require("./isArmstrong");

test("Will find out if a given number is an armstrong number", () => {
    expect(isArmstrongFunc(153)).toBe(true)
})

test("Will find out if a given number is an armstrong number", () => {
    expect(isArmstrongFunc(11)).toBe(false)
})

test("Will find out if a given number is an armstrong number", () => {
    expect(altIsArmstrongFunc(153)).toBe(true)
})

test("Will find out if a given number is an armstrong number", () => {
    expect(altIsArmstrongFunc(11)).toBe(false)
})