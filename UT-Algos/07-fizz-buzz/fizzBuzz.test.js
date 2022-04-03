const { fizzBuzz } = require("./fizzBuzz");

test("fizz buzz", () => {
    expect(fizzBuzz([10,11,12,13,14,15,16,17,18])).toStrictEqual(["Buzz", 11, "Fizz", 13, 14, "Fizz Buzz", 16, 17,"Fizz"]);
})