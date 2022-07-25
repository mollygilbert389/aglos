function smallestDifferenceFunc(arr1, arr2) {
    const finalArr = []
    
    arr1.forEach((firstArrNum, idx) => {
        arr2.forEach((secondArrNum, index) => {
            const difference = Math.abs(firstArrNum - secondArrNum);
            finalArr.push({
                difference, 
                firstArrIndex: idx,
                secondArrIndex: index
            })
        })
    })

    const sortedArr = finalArr.sort((a, b) => a.difference - b.difference)
    const foundObj = sortedArr[0]

    return [arr1[foundObj.firstArrIndex], arr2[foundObj.secondArrIndex]]
}

module.exports = { smallestDifferenceFunc }
