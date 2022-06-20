function sumTwoSmallestNums(arr) {
  let sum = 0;
  let filteredArr = arr.filter((elem) => {
    return elem > 0;
  });
  let sortedFilteredArr = filteredArr.sort((a, b) => {
    return a - b;
  });
  sum = sortedFilteredArr[0] + sortedFilteredArr[1];
  return sum;
}
module.exports = sumTwoSmallestNums;
console.log(sumTwoSmallestNums([-1, -3, -4, 0, 7, 8, 4]));
