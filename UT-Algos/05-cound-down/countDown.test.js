const { countDown } = require("./countDown");

test("creates a reverse array based on the num unput", () => {
    expect(countDown(5)).toStrictEqual([5, 4, 3, 2, 1]);
});