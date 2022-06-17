//Implement a function secondLargest(arr) that takes an array of numbers and returns the second largest number.
function secondLargest(arr) {

  if (arr.length == 2) {
    if (arr[0] > arr[1]) {
      return arr[1];
    } else {
      return arr[0];
    }
  }

  let largestNum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (largestNum >= arr[i]) {
      continue;
    } else {
      largestNum = arr[i];
    }
  }

  let secondLargestNum = arr[0];
  if (largestNum == arr[0]) {
    secondLargestNum = arr[1];
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == largestNum) {
      continue;
    } else {
      if (secondLargestNum >= arr[i]) {
        continue;
      } else {
        secondLargestNum = arr[i];
      }
    }
  }

  console.log(secondLargestNum);
  return secondLargestNum;
}
module.exports = secondLargest;