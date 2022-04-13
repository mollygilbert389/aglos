const { commonElement, altCommonElement } = require("./commonElement");

test("returns the commen number given two arrays", () => {
  var arrA = [1, 9, 8, 7];
  var arrB = [10, 12, 1, 6, 5];
  expect(commonElement(arrA, arrB)).toStrictEqual([1])
})

test("returns the commen number given two arrays", () => {
  var arrA = [1, 9, 8, 7];
  var arrB = [10, 12, 1, 6, 5];
  expect(altCommonElement(arrA, arrB)).toStrictEqual([1])
})