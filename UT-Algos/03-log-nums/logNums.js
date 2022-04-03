function logNumsArr(num) {
    return Array(num).fill().map((_, idx) => 1 + idx)
}

function logNumsRange(num1, num2) {
    const arrLength = num2 - num1
    return Array(arrLength + 1).fill().map((_, idx) => num1 + idx);
}

module.exports = { logNumsArr, logNumsRange } 