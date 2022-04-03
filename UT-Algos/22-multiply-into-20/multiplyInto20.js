function multiplyInto20(arr) {
  arr.forEach((num, idx) => {
    if(num[idx] * num === 20){
      return true
    } else {
      return false;
    }
  })
}

module.exports = { multiplyInto20 }