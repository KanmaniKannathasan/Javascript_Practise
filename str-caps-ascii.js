const str = "rEaCT";
let result = "";
for(let i=0;i<str.length;i++)
{
    if(str[i].charCodeAt()<=97 && str[i].charCodeAt()<=122)
    {
        result+=str[i].toUpperCase();
    }
    else
    {
        result +=str[i].toLowerCase();
    }
}
console.log(result);