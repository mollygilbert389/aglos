const { expect } = require("@jest/globals");
const { doubleTripleMap } = require("./doubleTripleMap");

test("should double even numbers and triple odd numbers in a given array", () => {
    expect(doubleTripleMap([1, 2, 3, 4])).toStrictEqual([3, 4, 9, 8])
})