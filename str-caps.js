const str = "rEaCT";
let result = "";
for (let i = 0; i < str.length; i++) {
  if (str[i] == str[i].toLowerCase()) {
    result += str[i].toUpperCase();
  } else {
    result += str[i].toLowerCase();
  }
}
console.log(result);
