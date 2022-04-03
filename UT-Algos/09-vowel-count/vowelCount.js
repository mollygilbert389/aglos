function vowelCount(string) {
    let count = 0;
    const newSting = string.toLowerCase();
    [...newSting].forEach((letter) => {
        if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u" || letter === "y"){
            count ++
        }
    })
    return count
}

module.exports = { vowelCount }