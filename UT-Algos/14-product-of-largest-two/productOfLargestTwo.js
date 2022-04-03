function productOfLargestTwo(numArr) {
  const sortedArr = numArr.sort((a,b) => a - b).reverse();
  return sortedArr[0] * sortedArr[1]
}

module.exports = { productOfLargestTwo }