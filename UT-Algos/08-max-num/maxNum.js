function maxNum(numArr) {
    const finalArr = numArr.sort((a, b) => a - b).reverse();
    return finalArr[0];
}

function altMaxNum(numArr) {
    let maxNum = numArr[0];
    return numArr[numArr.findIndex((item) => item > maxNum)]
}


module.exports = { maxNum, altMaxNum }