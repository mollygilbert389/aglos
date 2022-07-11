function squaresSortedArray(arr) {
  return arr.map((num) => num * num).sort((a,b) => a - b)
}

module.exports = { squaresSortedArray }