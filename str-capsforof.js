const str = "rEaCT";
let result = "";
for(let char of str)
{
    if(char==char.toLowerCase())
    {
        result+=char.toUpperCase();
    }
    else
    {
        result+=char.toLowerCase();
    }
}console.log(result);