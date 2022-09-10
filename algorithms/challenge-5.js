function filterList(arr) {
  const newList = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      newList.push(arr[i]);
    }
  }
  return newList;
}

filterList([1, 2, 'a', 'b']);
filterList([1, 'a', 'b', 0, 15]);
filterList([1, 2, 'aasf', '1', '123', 123]);

module.exports = filterList;
