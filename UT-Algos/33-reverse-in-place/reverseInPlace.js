function reverseInPlaceFunc(arr) {
    return arr.reverse();
}

function altReverseInPlaceFunc(arr) {
    return arr.map((_i, idx) => arr[arr.length-1-idx])
}

module.exports = { reverseInPlaceFunc, altReverseInPlaceFunc }