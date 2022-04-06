function mergeSorted(arr1, arr2) {
    return [...arr1, ...arr2].sort((a,b) => a - b)
}

module.exports = { mergeSorted }