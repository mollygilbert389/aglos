function mostSongs(arr) {
  let songNum = 0;
  const sortedArr = arr.sort((a,b) => a - b)
  sortedArr.reduce((number, song) => {
    if(number < 60) {
      ++songNum
      return number + song
    }
  }, 0)
  return songNum;
}

module.exports = { mostSongs }