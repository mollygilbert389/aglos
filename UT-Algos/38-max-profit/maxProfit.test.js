const { maxProfitFunc } = require("./maxProfit");

test("Will find out the max profit from an array of stock prices", () => {
    const arr = [1, 6, 7, 9];
    expect(maxProfitFunc(arr)).toEqual(8)
})

test("Will find out the max profit from an array of stock prices", () => {
    const arr = [1, 6, 7, 3];
    expect(maxProfitFunc(arr)).toEqual(6)
})

test("Will find out the max profit from an array of stock prices", () => {
    const arr = [9, 7, 4, 1];
    expect(maxProfitFunc(arr)).toEqual(0)
})