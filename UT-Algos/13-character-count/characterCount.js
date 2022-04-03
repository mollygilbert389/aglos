function characterCount(string) {
    const tempArr = [];
    const newString = string.toLowerCase();
    [...newString].map((letter) => {
        console.log(tempArr[letter])
        if([letter] && tempArr[letter].includes(letter)) {
            return [letter] = [letter] +1
        } else {
            tempArr.push({ [letter]: 1})
        }
    })
    console.log(tempArr)
    return tempArr;
}

module.exports = { characterCount }