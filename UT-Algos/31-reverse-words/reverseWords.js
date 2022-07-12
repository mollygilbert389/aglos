function reverseWordsFunc(str) {
    return [...str].reverse().join("");
}

function altReverseWordsFunc(str) {
    const newStr = [];
    [...str].forEach((letter) => (newStr.unshift(letter)))
    
    return newStr.join("")
}

module.exports = { reverseWordsFunc, altReverseWordsFunc }