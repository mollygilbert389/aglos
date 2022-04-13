const { arrayIntersection, altArrayIntersection } = require("./arrayIntersection");

test("given two arrays it will return the shared numbers in both arrays", () => {
  var arr1 = [1, 2, 3, 4];
  var arr2 = [3, 4, 5, 6];
  expect(arrayIntersection(arr1, arr2)).toStrictEqual([3, 4])
})

test("given two arrays it will return the shared numbers in both arrays", () => {
  var arr1 = [1, 2, 3, 4];
  var arr2 = [3, 4, 5, 6];
  expect(altArrayIntersection(arr1, arr2)).toStrictEqual([3, 4])
})