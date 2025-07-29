const str = "java";
let reverse = "";
for (let i = str.length - 1; i >= 0; i--) {
  reverse += str[i];
}
console.log(reverse);

//If reverse is not declared as empty string then then the outout will be undefined
