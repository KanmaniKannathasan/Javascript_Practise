//without using Object.values()
function getValues(obj)
{
    const result=[];
    for(let keys in obj)
    {
        result.push(obj[keys]);
    }
    return result;
}

console.log(getValues({a:1 , b:2, c:3})); //[1,2,3]