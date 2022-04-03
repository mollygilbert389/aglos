const { expect } = require("@jest/globals");
const { titleCase } = require("./titleCase");

test("given a sentance in lower case all first letters will be capitalized", () => {
    expect(titleCase("the quick brown fox jumps")).toBe("The Quick Brown Fox Jumps");
})