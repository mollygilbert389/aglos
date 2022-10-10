const { maxContiguousSubArrayFunc } = require("./maxSumContiguousSubArray");

test("will find the max contiguous sum of a sub array given an array", () => {
    const arr1 = [-1, 2]
    expect(maxContiguousSubArrayFunc(arr1)).toEqual(1)
})

test("will find the max contiguous sum of a sub array given an array", () => {
    const arr1 = [1, 2, 3, 4]
    expect(maxContiguousSubArrayFunc(arr1)).toEqual(10)
})

test("will find the max contiguous sum of a sub array given an array", () => {
    const arr1 = [1, 2, -50, 4, 5]
    expect(maxContiguousSubArrayFunc(arr1)).toEqual(9)
})

test("will find the max contiguous sum of a sub array given an array", () => {
    const arr1 =  [-2,1,-3,4,-1,2,1,-5,4]
    expect(maxContiguousSubArrayFunc(arr1)).toEqual(6)
})