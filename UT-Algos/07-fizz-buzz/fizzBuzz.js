function fizzBuzz(numArr) {
    return numArr.map((item) => {
        if (item%5 === 0 && item%3 === 0) {
            return "Fizz Buzz"
        } else if (item%5 === 0) {
            return "Buzz"
        } else if (item%3 === 0) {
            return "Fizz"
        } else {
            return item
        }
    })
}

module.exports = { fizzBuzz }