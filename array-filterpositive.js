function allPositives(numbers) {
  const result = numbers.filter(function (ele) {
    return ele >= 0;
  });
  return result;
  /*
OR we can also do 
  return numbers.filter(function (ele) {
    return ele >= 0;
  });
*/
}

console.log(allPositives([1, 2, 3, -10, -5, 7]));
