const { isUnique, altIsUnique, alt2IsUnique } = require("./isUnique");

test("given an arry returns true or false if no item is repeated", () => {
  expect(isUnique([1,2,3,4,5])).toBe(true)
})

test("given an arry returns true or false if no item is repeated", () => {
  expect(isUnique([1,2,3,3,5])).toBe(false)
})

test("given an arry returns true or false if no item is repeated", () => {
  expect(altIsUnique([1,2,3,4,5])).toBe(true)
})

test("given an arry returns true or false if no item is repeated", () => {
  expect(altIsUnique([1,2,3,3,5])).toBe(false)
})

test("given an arry returns true or false if no item is repeated", () => {
  expect(alt2IsUnique([1,2,3,4,5])).toBe(true)
})

test("given an arry returns true or false if no item is repeated", () => {
  expect(alt2IsUnique([1,2,3,3,5])).toBe(false)
})