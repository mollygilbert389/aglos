const { isAnagram, altIsAnagram } = require("./isAnagram");

test("returns a boolean if two given strings contain the same letters in any given order", () => {
  expect(isAnagram("happyfeet", "ppyeetfah")).toBe(true)
})

test("returns a boolean if two given strings contain the same letters in any given order", () => {
  expect(isAnagram("happyfeet", "hapfeen")).toBe(false)
})

test("returns a boolean if two given strings contain the same letters in any given order", () => {
  expect(altIsAnagram("happyfeet", "ppyeetfah")).toBe(true)
})

test("returns a boolean if two given strings contain the same letters in any given order", () => {
  expect(altIsAnagram("happyfeet", "hapfeen")).toBe(false)
})