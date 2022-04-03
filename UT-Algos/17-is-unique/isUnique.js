function isUnique(arr) {
 return Array.from(new Set(arr)).length === arr.length ? true : false;
}

function altIsUnique(arr) {
  let finalBoolean = true;
  arr.reduce((boolean, item) => {
    if(boolean.find((i) => i === item)){
      finalBoolean = false;
      return boolean.concat(item);
    } else {
      return boolean.concat(item);
    }
  }, [])
  return finalBoolean
 }

 function alt2IsUnique(arr) {
  return arr.filter((item, idx) =>  arr.indexOf(item) === idx).length === arr.length ? true : false;
 }

module.exports = { isUnique, altIsUnique, alt2IsUnique }