function filterArray(arr) {
  const numArray = [];
  for (let i = 0; i < arr.length; i++) {
    const result = arr[i];

    if (typeof result === 'number') {
      numArray.push(result);
    }
  }

  return numArray;
}

filterArray([1, 2, 'a', 'b']);
filterArray([4, 'z', 'f', 5]);
filterArray(['$%^', 567, '&&&']);

module.exports = filterArray;
