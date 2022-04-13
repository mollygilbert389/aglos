const { arrayIntersection, altArrayIntersection } = require("./arrayIntersection");

test("it will return the matching numbers of two given arrays", () => {
  const arr1 = [1, 2, 3, 4];
  const arr2 = [3, 4, 5, 6];
  expect(arrayIntersection(arr1, arr2)).toStrictEqual([3, 4])
})

test("it will return the matching numbers of two given arrays", () => {
  const arr1 = [1, 2, 3, 4];
  const arr2 = [3, 4, 5, 6];
  expect(altArrayIntersection(arr1, arr2)).toStrictEqual([3, 4])
})