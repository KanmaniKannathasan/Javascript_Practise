const str = "UcUNFYGaFYFYGtNUH";
let result="";

for(let i=0; i<str.length;i++)
{
    if(str[i].charCodeAt()>=97 && str[i].charCodeAt()<=122)
    {
        result+=str[i];
    }
}
console.log(result);