// Returning the first non reeating character
function repeating(str) {
  const result = {};
  for (let keys of str) {
    if (keys in result) {
      result[keys] += 1;
    } else {
      result[keys] = 1;
    }
  }
  let object=[]
  for (let keys1 in result) {
    if (result[keys1] > 1) {
      object.push(keys1);
    }
  }
  return object;
}
/// iteration table in notebook

console.log(repeating("dctttdd"));

