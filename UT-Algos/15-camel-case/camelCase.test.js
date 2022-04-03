const { camelCase, altCamelCase } = require("./camelCase");

test("given a sentence returns a camel case string", () => {
  expect(camelCase("the smart fox runs")).toBe("theSmartFoxRuns");
})

test("given a sentence returns a camel case string", () => {
  expect(altCamelCase("the smart fox runs")).toBe("theSmartFoxRuns");
})