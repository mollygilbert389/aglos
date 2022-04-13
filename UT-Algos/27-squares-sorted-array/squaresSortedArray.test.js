const { squaresSortedArray } = require("./squaresSortedArray");

test("given an array of numbers returns a new array of squares sorted", () => {
  expect(squaresSortedArray([-4, -1, 0, 3, 10])).toStrictEqual([0, 1, 9, 16, 100])
})

test("given an array of numbers returns a new array of squares sorted", () => {
  expect(squaresSortedArray([-7, -3, 2, 3, 11])).toStrictEqual([4, 9, 9, 49, 121])
})