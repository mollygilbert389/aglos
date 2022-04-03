function oddEvenNum(num) {
    if(num%2 === 0) {
        return "Even"
    } else {
        return "Odd"
    }
}

function oddEvenArr(numArr) {
   return numArr.map((num) => {
        if(num%2 === 0) {
            return "Even"
        } else {
            return "Odd"
        }
    });
}

module.exports = { oddEvenNum, oddEvenArr }