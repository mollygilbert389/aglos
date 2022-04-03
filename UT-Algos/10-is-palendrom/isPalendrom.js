function isPalendrom(string) {
    if([...string].reverse().join("") === string) {
        return true
    } else {
        return false
    }
}

module.exports = { isPalendrom };