function maxProfitFunc(arr) {
    const sortedArr = [...arr].sort((a, b) => a - b);
    const largestNum = sortedArr.pop();
    const smallestNum = sortedArr.reverse().pop();

    if(arr.indexOf(largestNum) > arr.indexOf(smallestNum)){
        return largestNum - smallestNum
    } else {
        return  0;
    }
}

module.exports = { maxProfitFunc }