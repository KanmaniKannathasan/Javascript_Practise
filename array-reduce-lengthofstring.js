function stringLength(arr) {
  const arrStr = arr.reduce(function (acc, cv) {
    return (acc += cv.length);
  }, 0);
  return arrStr;
}

console.log(stringLength(["abc", "de", "fghi"]));

// In this code without assigning the intial value for accumulateor everything becomes collaspsed.
