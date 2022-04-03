function linearSearch(arr, number) {
  const index = arr.findIndex((num) => num === number);
  return index;
}

module.exports = { linearSearch }