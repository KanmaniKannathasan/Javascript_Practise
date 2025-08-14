const obj = { a: 1, b: 20, c: 3 }; // return key with the max value ie. b
max = -Infinity;
let maxkey = "";
for (let keys in obj) {
  if (obj[keys] > max) {
    max = obj[keys];
    maxkey = keys;
  }
}
console.log(maxkey);
