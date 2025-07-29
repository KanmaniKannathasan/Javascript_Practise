const str = "jAvAScRIpt";
let upper = "";
let lower = "";
for (let i = 0; i < str.length; i++) {
  if (str[i] == str[i].toUpperCase()) {
    upper += str[i];
  } else {
    lower += str[i];
  }
}
console.log(upper+lower);
