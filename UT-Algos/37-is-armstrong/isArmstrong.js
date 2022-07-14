function isArmstrongFunc(num) {
    const newNum = [...num.toString()].map((number, _i, arr) => {
        return Math.pow(parseInt(number), arr.length)
    }).reduce((acc, val) => (acc + val), 0);

    return Boolean(newNum === num);
}

function altIsArmstrongFunc(num) {
    const newNum = [...num.toString()].map((number, _i, arr) => {
        return parseInt(number) ** arr.length
    }).reduce((acc, val) => (acc + val), 0);

    return Boolean(newNum === num);
}

module.exports = { isArmstrongFunc, altIsArmstrongFunc }