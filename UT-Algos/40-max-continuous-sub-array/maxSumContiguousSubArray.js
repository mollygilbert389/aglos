function maxContiguousSubArrayFunc(arr) {
    const sortedArr = arr.sort((a, b) => a - b)

    const contiguousArr = [];
    let finalNum;

    if(sortedArr.length === 2) {
        const sum = sortedArr.reduce((partialSum, a) => partialSum + a, 0);
        finalNum = sum
    } else {
        sortedArr.forEach((num, idx, array) => {
            if(num+1 === array[idx+1]) {
                contiguousArr.push(num)
            }

        })
        console.log(contiguousArr)
        const sum = contiguousArr.reduce((partialSum, a) => partialSum + a, 0);
        finalNum = sum
    }

    return finalNum;

}

module.exports = { maxContiguousSubArrayFunc }