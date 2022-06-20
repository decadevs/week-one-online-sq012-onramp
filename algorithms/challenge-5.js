//Implement the function filterList(arr) that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
function filterList(arr) {
    let returnValue = [];

    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] == "number") {
        returnValue.push(arr[i]);
      }
    }
  
    console.log(returnValue);
    return returnValue;
}

module.exports = filterList;