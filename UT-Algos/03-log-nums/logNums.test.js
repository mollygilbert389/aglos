const { logNumsArr, logNumsRange } = require("./logNums");

test("logs consecutive nums up to a give num", () => {
    expect(logNumsArr(5)).toStrictEqual([1,2,3,4,5]);
})

test("logs consecutive numbers based on a range", () => {
    expect(logNumsRange(4, 9)).toStrictEqual([4,5,6,7,8,9]);
})