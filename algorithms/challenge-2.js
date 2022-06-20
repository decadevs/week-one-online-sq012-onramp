//Implement a function filterArray(arr) that takes an array of non-negative integers and strings and return a new array without the strings.
function filterArray(arr) {
  let returnValue = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number") {
      returnValue.push(arr[i]);
    }
  }

  console.log(returnValue);
  return returnValue;
}
module.exports = filterArray;