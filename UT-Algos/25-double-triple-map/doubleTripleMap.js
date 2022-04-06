function doubleTripleMap(arr) {
    arr.forEach((item, idx) => {
        item%2 === 0 ? (arr[idx] = item*2) : (arr[idx] = item*3)
      });

    return arr
}

module.exports ={ doubleTripleMap }