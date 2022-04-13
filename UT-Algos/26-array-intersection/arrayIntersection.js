function arrayIntersection(arr1, arr2) {
  const finalArr = [];
  arr1.forEach((num) => {
    arr2.forEach((item) => {
      if(item === num) {
        finalArr.push(item)
    }})
  })

  return finalArr
}

function altArrayIntersection(arr1, arr2) {
  return arr1.reduce((finalArr, item) => {
    return arr2.map((num) => {
      if(num === item) {
        return finalArr.concat(num)
      }
    })
  }, []).flat(2).filter((item) => Boolean(item))
}

module.exports = { arrayIntersection, altArrayIntersection }