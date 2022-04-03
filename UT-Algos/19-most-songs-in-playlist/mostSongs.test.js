const { mostSongs } = require("./mostSongs");

test("returns the max number of songs that can fix onto a 60 min soundtrack given an array of mins", () => {
  expect(mostSongs([3, 4, 7, 2])).toBe(4);
})

test("returns the max number of songs that can fix onto a 60 min soundtrack given an array of mins", () => {
  expect(mostSongs([4, 2, 5, 3, 1, 1, 2, 3, 4, 2, 5, 6, 3, 2, 4, 7, 3, 2, 3, 5,7,8])).toBe(19);
})
