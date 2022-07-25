const { smallestDifferenceFunc } = require("./smallestDifference");

test("Will find the smallest difference between 2 numbers in 2 given arrays", () => {
    const arr1 = [1, 6, 7, 9];
    const arr2 = [8, 9, 10, 11, 12, 13];
    expect(smallestDifferenceFunc(arr1, arr2)).toStrictEqual([9, 9])
})

test("Will find the smallest difference between 2 numbers in 2 given arrays", () => {
    const arr1 = [2, 4, 6, 8, 15, 20];
    const arr2 = [17, 25, 30, 47];
    expect(smallestDifferenceFunc(arr1, arr2)).toStrictEqual([15, 17])
})
