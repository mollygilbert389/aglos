const { minIncrementUniqueFunc } = require("./minIncrementUnique");

test("find the min unique increment of a given array", () => {
    const arr = [1, 2, 2];
    expect(minIncrementUniqueFunc(arr)).toEqual(1)
})

test("find the min unique increment of a given array", () => {
    const arr = [3, 2, 1, 2, 1, 7];
    expect(minIncrementUniqueFunc(arr)).toEqual(6)
})

test("find the min unique increment of a given array", () => {
    const arr = [1, 2, 3];
    expect(minIncrementUniqueFunc(arr)).toEqual(0)
})