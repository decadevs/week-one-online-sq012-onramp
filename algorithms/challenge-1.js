function secondLargest(arr) {
  const sortArr = arr.sort((a, b) => a - b);
  return (result = sortArr[sortArr.length - 2]);
}

module.exports = secondLargest;
