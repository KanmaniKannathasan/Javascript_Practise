function addNum(arr) {
  const result = arr.map(function (ele) {
    return ele + 5;
  });
  return result;
}

console.log(addNum([10, 11, 12, 13, 14]));

// if 'return' with ele+5 is not used then we get
//[undefined,undefined,undefined,undefined,undefined] as the no of elements
