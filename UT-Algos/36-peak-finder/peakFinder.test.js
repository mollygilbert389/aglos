const { peakFinderFunc, peakIndexFinderFunc } = require("./peakFinder");

test("Will find the largest number in the array", () => {
    const arr = [1, 3, 7, 4, 3, 2, 1];
    expect(peakFinderFunc(arr)).toEqual(7)
})

test("Will find the largest number in the array", () => {
    const arr = [2, 4, 6, 8, 10];
    expect(peakFinderFunc(arr)).toEqual(10)
})

test("Will find the largest number in the array", () => {
    const arr = [1];
    expect(peakFinderFunc(arr)).toEqual(1)
})

test("Will find the index of largest number in the array", () => {
    const arr = [1];
    expect(peakIndexFinderFunc(arr)).toEqual(0)
})

test("Will find the index of largest number in the array", () => {
    const arr = [2, 4, 6, 8, 10];
    expect(peakIndexFinderFunc(arr)).toEqual(4)
})

test("Will find the index of largest number in the array", () => {
    const arr = [1, 3, 7, 4, 3, 2, 1];
    expect(peakIndexFinderFunc(arr)).toEqual(2)
})