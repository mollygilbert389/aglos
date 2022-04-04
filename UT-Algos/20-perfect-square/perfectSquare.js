function perfectSquare(num) {
  const boolArr = Array(num).fill().map((_, idx) => {
    const currSqurt = (idx +1) * (idx +1)
    return currSqurt === num ? true : false;
  })
  const finalBool = boolArr.find((item) => item === true) ?? false;
  return finalBool;
};

module.exports = { perfectSquare };