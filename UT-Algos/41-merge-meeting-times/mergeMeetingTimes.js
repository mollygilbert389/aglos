function mergeMeetingTimesFunc(arr) {
    const sortedFlatArr = arr.flat(1).sort((a, b) => a - b)
    sortedFlatArr.forEach((time, idx, array) => {
        if(idx < array.length && time+1 === array[idx+1]) {
            //found next time
        }
    })

    return null;

}

module.exports = { mergeMeetingTimesFunc }