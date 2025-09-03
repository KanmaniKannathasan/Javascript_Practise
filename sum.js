const n = "12345";
let sum = 0;
for (let i = 0; i < n.length; i++) 
{
    sum += Number(n[i]);
    //sum+= parseInt(n[i]);
}
console.log(sum);

//To convert string to integer use Number(str[i]) or Number(str) or parseInt(str[i])

