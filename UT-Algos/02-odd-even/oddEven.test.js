const { oddEvenNum, oddEvenArr } = require('./oddEven');

test('returns if one number is odd even', () => {
    expect(oddEvenNum(2)).toBe("Even");
  });

  test('returns an array of odd evens', () => {
    expect(oddEvenArr([2,3,4])).toStrictEqual(["Even", "Odd", "Even"]);
  });