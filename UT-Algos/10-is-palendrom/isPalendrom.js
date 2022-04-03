function isPalendrom(string) {
    return [...string].reverse().join("") === string ? true : false;
}

module.exports = { isPalendrom };