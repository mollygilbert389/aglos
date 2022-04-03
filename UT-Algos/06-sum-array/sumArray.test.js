const { sumArray } = require("./sumArray");

test("returns the sum of all numbers in array", () => {
    expect(sumArray([1,2,3])).toBe(6);
})