const { productOfLargestTwo } = require("./productOfLargestTwo");

test("this function will return the product of the largest two intergers in an array", () => {
  expect(productOfLargestTwo([20, 8, 4, 10, 2])).toBe(200);
})