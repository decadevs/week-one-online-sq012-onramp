function secondLargest(arr) {
  let sortArray = arr.sort(function (a, b) {
    return b - a;
  });
  let secondLargestNumber = sortArray[1];
  console.log(secondLargestNumber);
}
secondLargest([1, 12, 83, 34, 75, 46, 27]);
