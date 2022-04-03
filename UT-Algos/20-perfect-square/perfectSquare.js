function perfectSquare(num) {
  let finalBool;
  Array(num).map((_, idx) => {
    const currSqurt = idx * idx
    if(currSqurt === num) {
      finalBool = true
    } else if (curr > num){
      finalBool = false
    } else {
      idx++
    }
  })
  return finalBool;
};

module.exports = { perfectSquare };