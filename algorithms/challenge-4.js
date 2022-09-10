function sumTwoSmallestNums(arr) {
  arr.sort((a, b) => a - b);
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      newArray.push(arr[i]);
    }
  }
  const result = newArray[0] + newArray[1];
  return result;
}

sumTwoSmallestNums([19, 5, 42, 2, 77]);
sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453]);
sumTwoSmallestNums([2, 9, 6, -1]);

module.exports = sumTwoSmallestNums;
