const { leftRotationFunc } = require("./leftRotation");

test("will rotate given integers to the left of a given integer", () => {
    const arr = [1, 2, 3];
    const integer = 2;
    expect(leftRotationFunc(arr, integer)).toStrictEqual([3, 1, 2])
})
