function isAnagram(str1, str2) {
  return [...str1].every((letter) => [...str2].includes(letter));
}

function altIsAnagram(str1, str2) {
  const getCount = (string) => (
    [...string].reduce((finalObject, item) => {
      finalObject[item] = finalObject[item] ? ++finalObject[item] : 1;
      return finalObject
    }, {})
  )

  const orderedArr1 = JSON.stringify(Object.entries(getCount(str1)).sort());
  const orderArr2 = JSON.stringify(Object.entries(getCount(str2)).sort())

  if(orderArr2 === orderedArr1) {
    return true;
  } else {
    return false
  }
}


module.exports = { isAnagram, altIsAnagram }