const { add, subtract, multiply, divide } = require('./equations');

test('adds', () => {
  expect(add(1, 2)).toBe(3);
});

test('subtracts', () => {
    expect(subtract(3, 2)).toBe(1);
  });

  test('multiplies', () => {
    expect(multiply(2, 2)).toBe(4);
  });

  test('divides', () => {
    expect(divide(8, 4)).toBe(2);
  });