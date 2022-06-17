//Implement the function sumMix(arr) that given an array of integers as strings and numbers, returns the sum of the array values as if all were numbers.
function sumMix(arr) {
  let returnValue = 0;
  for (let i = 0; i < arr.length; i++) {
    if (+arr[i]) {
      returnValue += Number(arr[i]);
    }
  }
  console.log(returnValue);
  return returnValue;
}
module.exports = sumMix;