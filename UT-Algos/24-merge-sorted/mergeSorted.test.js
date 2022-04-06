const { expect } = require("@jest/globals");
const { mergeSorted } = require("./mergeSorted");

test("function will take in two arrays and return one sorted array", () => {
    var arr1 = [4, 8, 15, 16, 23, 42];
    var arr2 = [1, 2, 3, 6, 20, 21]
    expect(mergeSorted(arr1, arr2)).toStrictEqual([1, 2, 3, 4, 6, 8, 15, 16, 20, 21, 23, 42])
})