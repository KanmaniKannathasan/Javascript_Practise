// without using Object.keys()
function getKeys(obj)
{
    const result=[];
    for(let keys in obj)
    {
        result.push(keys);
    }
    return result;
}

console.log(getKeys({a:1 ,b:2 , c:3})); //['a','b','c']
