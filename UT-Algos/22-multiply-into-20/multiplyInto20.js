function multiplyInto20(arr) {
  return arr.map((num, idx) => {
    if(arr[idx] < arr.length) {
      if(num * arr[idx+1] === 20) {
        return true
      } else {
        return false
      }
    }
  }).find((val) => Boolean(val)) ?? false
}

module.exports = { multiplyInto20 }