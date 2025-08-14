function getEvens(arr) {
  const result = arr.reduce(function (acc, cv) {
    if (cv % 2 == 0) {
      acc.push(cv);
    }
    return acc;
  }, []);
  return result;
}

console.log(getEvens([10, 11, 12, 13, 14]));
