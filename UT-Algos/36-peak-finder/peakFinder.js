function peakFinderFunc(arr){
    const largestNumber = arr.sort((a, b) => a - b).pop();
    return largestNumber
}

function peakIndexFinderFunc(arr){
    const largestNumber = [...arr].sort((a, b) => a - b).pop();
    const indexOfLargestNumber = arr.indexOf(largestNumber);
    return indexOfLargestNumber
}

module.exports = { peakFinderFunc, peakIndexFinderFunc }