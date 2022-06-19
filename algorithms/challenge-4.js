//Implement the function sumTwoSmallestNums(arr) that takes an array of numbers and returns the sum of the two lowest positive numbers.
function sumTwoSmallestNums(arr) {
    const sortedArray = arr.sort((a, b) => (a - b));
    let positiveArray = [];

    for (let i = 0; i < sortedArray.length; i++) {
        if (sortedArray[i] >= 0) {
            positiveArray.push(sortedArray[i]);
        }
    }

    let result = positiveArray[0] + positiveArray[1];
    console.log(result);
    return result;
}
module.exports = sumTwoSmallestNums;