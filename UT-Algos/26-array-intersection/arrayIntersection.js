function arrayIntersection(arr1, arr2){
  const finalArr = [];

  arr1.forEach((item) => {
    if(arr2.find((i) => i === item)) {
      finalArr.push([item])
    };
  });

  return finalArr.flat();
};

function altArrayIntersection(arr1, arr2){
  return arr1.filter((item) => arr2.includes(item));
};

module.exports = { arrayIntersection, altArrayIntersection }