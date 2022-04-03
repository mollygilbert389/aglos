function titleCase(sentence) {
    const sentenceArr = sentence.split(" ").map((word) => {
        const finalWord = word.split("")
        finalWord[0] = finalWord[0].toUpperCase();
        return finalWord.join("")
    })
    return sentenceArr.join(" ")
}

module.exports = { titleCase };