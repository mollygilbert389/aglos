function leftRotationFunc(arr, integer) {
    const rotateAndFilter = arr.filter((item) => item !== integer).reverse();
    return [...rotateAndFilter, integer];
}

module.exports = { leftRotationFunc }