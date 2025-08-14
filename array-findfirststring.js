function firstStr(arr) {
  const result = arr.find(function (ele) {
    return typeof(ele) =='string';
  })
  return result;
}

console.log(firstStr([1, 2, 3, "d", "c", "t"])); //d
