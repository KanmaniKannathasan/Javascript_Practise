const str = "jAvAScRIpt";
let upper = "";
let lower = "";
for (let i = 0; i < str.length; i++) 
{
  if (str[i].charCodeAt() >= 97 && str[i].charCodeAt() <= 122)
    {
        lower += str[i];
    } 
    else 
    {
        upper += str[i];
    }
}
console.log(upper+lower);
