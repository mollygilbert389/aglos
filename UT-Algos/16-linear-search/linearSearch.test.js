const { linearSearch } = require("./linearSearch");

test("should return the index of a number if present in a given array", () => {
  expect(linearSearch([3,8,9,12,15,7,22],7)).toBe(5)
})

test("should return the -1 if number is not present in the given array", () => {
  expect(linearSearch([3,8,9,12,15,7,22],2)).toBe(-1)
})