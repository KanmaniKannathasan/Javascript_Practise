let n = 1234;
let sum = 0;
let numstr = String(n);
//let numstr=n.toString(n);
for (let i = 0; i < numstr.length; i++) {
  sum += Number(numstr[i]);
}
console.log(sum);
