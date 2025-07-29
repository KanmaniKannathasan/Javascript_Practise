const str = "abcd";
let result = "";
for (let i = 0; i < str.length; i++) {
  if (str[i].charCodeAt() % 2 == 0) 
    {
    result+=str[i].toUpperCase();
    }
  else
  {
    result+=str[i].toLowerCase();
  }
}
console.log(result);
