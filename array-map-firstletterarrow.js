const firstLetter=function (arr) {
  const result = arr.map(ele => ele.charAt(0) + ele.charAt(ele.length - 1));
  return result;
}
console.log(firstLetter(["dravid", "sachin", "zaheer"]));
