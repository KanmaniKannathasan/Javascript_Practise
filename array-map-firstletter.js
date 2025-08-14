function firstLetter(arr) {
  const result = arr.map(function (ele) {
    return ele.charAt(0) + ele.charAt(ele.length - 1);
  });
  return result;
}
console.log(firstLetter(["dravid", "sachin", "zaheer"]));
