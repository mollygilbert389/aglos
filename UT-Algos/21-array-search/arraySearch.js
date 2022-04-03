function arraySearch(arr) {
  let count = 0;
  arr.flat().forEach((item) => {
    if(item === "X") {
     ++count
    }
  })
  return count
}

function altArraySearch(arr) {
  const finalNum = arr.flat().reduce((finalNum, item) => {
    if(item === "X") {
      return finalNum + 1
    } else {
      return finalNum
    }
  }, 0)
  return finalNum
}

module.exports = { arraySearch, altArraySearch }