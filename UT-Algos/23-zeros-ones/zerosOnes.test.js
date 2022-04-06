const { zerosOnes } = require("./zerosOnes");

test("it will return true if a given string of numbers contains equal 0s and 1s", () => {
    expect(zerosOnes("00110011")).toBe(true)
})

test("it will return true if a given string of numbers contains equal 0s and 1s", () => {
    expect(zerosOnes("11110")).toBe(false)
})