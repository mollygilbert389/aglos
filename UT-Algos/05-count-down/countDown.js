function countDown(num) {
    return Array(num).fill().map((_, idx) => 1 + idx).reverse();
}

module.exports = { countDown }