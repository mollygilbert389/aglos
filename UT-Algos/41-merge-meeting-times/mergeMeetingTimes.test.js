const { mergeMeetingTimesFunc } = require("./mergeMeetingTimes");

test("will find ", () => {
    const arr = [[ 1, 3 ], [ 2, 4 ]];
    expect(mergeMeetingTimesFunc(arr)).toStrictEqual([[ 1, 4 ]])
})
