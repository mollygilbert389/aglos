function logEvens(numArr) {
    return numArr.map((num) => {
        if(num%2 === 0) {
            return num
        }
    }).filter((item) => Boolean(item))
}

module.exports = { logEvens }