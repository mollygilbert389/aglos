const { reverseInPlaceFunc, altReverseInPlaceFunc } = require("./reverseInPlace");

test("will reverse the arr without creating a new one", () => {
    const arr = [2, 4, 6, 8];
    expect(reverseInPlaceFunc(arr)).toStrictEqual([8, 6, 4, 2])
})

test("will reverse the arr without creating a new one", () => {
    const arr = [2, 4, 6, 8];
    expect(altReverseInPlaceFunc(arr)).toStrictEqual([8, 6, 4, 2])
})
