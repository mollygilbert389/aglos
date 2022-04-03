const { logEvens } = require("./logEvens");

test("this test will return even numbers on an array", () => {
    expect(logEvens([2,3,4,5])).toStrictEqual([2,4]);
})