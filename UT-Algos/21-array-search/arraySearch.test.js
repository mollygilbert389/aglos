const { arraySearch, altArraySearch } = require("./arraySearch");

test("will return the number of X inside in array of arrays", () => {
  const arr = [
    ["X", "O", "O", "O", "X", "O"],
    ["O", "X", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "X", "X"],
    ["O", "O", "O", "O", "O", "O"]
  ]
  expect(arraySearch(arr)).toBe(5)
})


test("will return the number of X inside in array of arrays", () => {
  const arr = [
    ["X", "O", "O", "O", "X", "O"],
    ["O", "X", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "X", "X"],
    ["O", "O", "O", "O", "O", "O"]
  ]
  expect(altArraySearch(arr)).toBe(5)
})