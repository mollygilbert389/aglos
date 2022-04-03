function sumArray(numArr) {
    return numArr.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
}

module.exports = { sumArray }