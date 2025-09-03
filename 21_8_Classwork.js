//1
const obj={a:1, b:2,c:3}
for( let keys in obj)
{
    console.log('Key=',keys ,', value=',obj[keys]);
}

//2
const arr=[10,20,30,40];
const result= arr.reduce((acc,cv)=>
{
    acc+=cv;
    return acc;
})
console.log(result);

//3
const str= 'javascript';
const char='a';
let count=0;
for(let i=0;i<str.length;i++)
{
    if(str[i]==char) // or if(str[i].includes(char))
    {
        count++;
    }
}
console.log(count);