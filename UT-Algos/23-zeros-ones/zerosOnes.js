function zerosOnes(str) {
    return [...str].filter((num) => num == 0).length === [...str].filter((num) => num == 1).length ? true : false;
}

module.exports = { zerosOnes }