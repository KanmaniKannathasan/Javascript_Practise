// Returning the first non reeating character
function nonRepeating(str) {
  const result = {};
  for (let keys of str) {
    if (keys in result) {
      result[keys] += 1;
    } else {
      result[keys] = 1;
    }
  }

  for (let keys1 in result) {
    if (result[keys1] == 1) {
      return keys1;
    }
  }
  return "";
}
/// iteration table in notebook

console.log(nonRepeating("ddcttd"));
//c
