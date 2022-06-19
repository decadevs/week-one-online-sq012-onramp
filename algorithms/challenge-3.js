function sumMix(arr) {
  let sum = 0;
  let inOnlyArr = arr.map((item) => {
    return parseInt(item, 10);
  });
  //inOnlyArr.map((item)=>{return sum+=item;})
  for (let i = 0; i < inOnlyArr.length; i++) {
    sum += inOnlyArr[i];
  }
  return sum;
}

module.exports = sumMix;
console.log(sumMix([5, 9, "87", "98"]));
