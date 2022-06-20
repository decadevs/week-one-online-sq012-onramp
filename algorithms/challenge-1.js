//Implement a function secondLargest(arr) that takes an array of numbers and returns the second largest number.
function secondLargest(arr) {

  const sortedArray = arr.sort((a, b) => (a - b));
  let secondLargestNum = sortedArray[sortedArray.length - 2];

  console.log(secondLargestNum);
  return secondLargestNum;
}
module.exports = secondLargest;