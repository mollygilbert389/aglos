function permutationSubstringFunc(str, sub) {
    const found = [...sub].filter((letter) => {
        return [...str].find((item) => item === letter)
    })
    return Boolean(found.length === sub.length)
}

module.exports = { permutationSubstringFunc };
