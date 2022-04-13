function commonElement(arrA, arrB) {
  return arrA.filter((item) => arrB.includes(item))
}

function altCommonElement(arrA, arrB) {
  const finalArr = []
  arrA.forEach((item) => {
    arrB.forEach((secondItem) => {
      if(item === secondItem) {
        finalArr.push(item)
      }
    })
  })

  return finalArr
}

function anotherCommonElement(arrA, arrB) {
  arrA.reduce((finalArr, item) => {
    
  }, [])

  return finalArr
}

module.exports = { commonElement, altCommonElement, anotherCommonElement }