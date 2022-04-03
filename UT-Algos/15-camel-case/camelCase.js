function camelCase(string) {
  const stringArr = string.split(" ");
  const upperCase = stringArr.map((word, idx) => {
    if(idx !== 0) {
      const newWord = [...word]
      newWord[0] = [...word][0].toUpperCase();
      return newWord.join("")
    } else {
      return word;
    }
  })
  return upperCase.join("");
}

function altCamelCase(string) {
  const string1 = string.split(" ").reduce((finalString, word, idx) => {
    if(idx > 0) {
      const newWord = [...word]
      newWord[0] = [...word][0].toUpperCase();
      return finalString.concat(newWord.join(""))
    } else {
      return finalString.concat(word)
    }
  }, "")
  return string1
}

module.exports = { camelCase, altCamelCase }