const isEven = function (ele) {
  return ele % 2 == 0;
};
console.log(isEven(10));
console.log(isEven(11));

const arr = [10, 11, 12, 13, 14, 15];
const result = arr.filter(isEven); //Function Expression
console.log(result);
