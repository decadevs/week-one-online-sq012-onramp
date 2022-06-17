//Implement the function sumTwoSmallestNums(arr) that takes an array of numbers and returns the sum of the two lowest positive numbers.
function sumTwoSmallestNums(arr) {
    let lowestNum = arr[0];
    let lowestPostion = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if(lowestNum <= arr[i] && lowestNum >= 0) {
            continue;
        } else {
            if (arr[i] >= 0) {
                lowestNum = arr[i];
                lowestPostion = i;
            }
        }
    }

    let secondLowestNum = arr[0];
    
    if (lowestPostion == 0) {
        secondLowestNum = arr[1];
    }

    for (let i = 0; i < arr.length; i++) {
        if (i == lowestPostion) {
            continue;
        } else {
            if(secondLowestNum <= arr[i] && secondLowestNum >= 0) {
                continue;
            } else {
                if (arr[i] >= 0) {
                    secondLowestNum = arr[i];
                }
            }
        }
    }

    console.log(lowestNum + secondLowestNum);
    return (lowestNum + secondLowestNum);
}
module.exports = sumTwoSmallestNums;