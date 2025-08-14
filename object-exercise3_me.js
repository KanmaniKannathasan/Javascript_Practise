const strLength = (arr) => {
  const result = arr.reduce(function (acc, cv) {
     return (acc[cv] = cv.length);
    //return acc;
  }, {});
  return result;
};
console.log(strLength(["abc", "ab", "a", "abcd"])); // { abc: 3, ab:2}
