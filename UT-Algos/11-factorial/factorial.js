function factorial(num) {
    const numArr = Array(num).fill().map((_, idx) => 1 + idx);
    return numArr.reduce((previousValue, currentValue) => previousValue * currentValue, 1);
}

module.exports = { factorial }