function filterArray(arr) {
  return arr.filter((elem) => {
    return typeof elem === "number";
  });
}
module.exports = filterArray;
