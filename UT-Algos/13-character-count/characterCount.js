function characterCount(string) {
    const newString = string.toLowerCase();
    const countArr = [...newString].reduce((finalObj, letter) => {
        finalObj[letter] = finalObj[letter] ? ++finalObj[letter] : 1;
        return finalObj;
    }, {});
    return countArr
}

function altCharacherCount(string) {
    const newString = string.toLowerCase();
    const finalObj = {};
    [...newString].forEach((letter) => {
        if (letter in finalObj) {
            finalObj[letter]++
        } else {
            finalObj[letter] = 1;
        }
    })
    return finalObj
}

module.exports = { characterCount, altCharacherCount }