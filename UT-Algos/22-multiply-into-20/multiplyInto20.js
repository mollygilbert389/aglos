function multiplyInto20(arr) {
  let finalBool;
  arr.reverse().forEach((num1) => {
    arr.forEach((num2) => {
      if(num1 * num2 === 20) {
        finalBool = true;
      } else {
        finalBool = false
      }
    })
  })

  return finalBool;
}

module.exports = { multiplyInto20 }