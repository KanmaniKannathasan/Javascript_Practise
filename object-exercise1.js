//using for of loop 
function pair(str) {
  const result = {};
  for (let char of str) {
    result[char] = char.toUpperCase();
  }
  return result;
}
//Iteration see the notebook

console.log(pair("dct")); //{d: 'D', c:'C', t:'T'}
