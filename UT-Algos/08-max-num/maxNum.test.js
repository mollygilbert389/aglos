const { maxNum, altMaxNum } = require("./maxNum");

test("returns the largest number of an array", () => {
    expect(maxNum([4,18,3,9,10])).toBe(18);
})

test("returns the largest number of an array", () => {
    expect(altMaxNum([4,18,3,9,10])).toBe(18);
})