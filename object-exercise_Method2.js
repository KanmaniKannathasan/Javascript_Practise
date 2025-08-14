  function checkProp(obj,prop)
{
    // return prop in obj; works
    for(let keys in obj)
    {
        if(prop== keys)
        {
            return true;
        }
        return false
        
    }
    
}

console.log(checkProp({ a: 1, b: 2 }, 'a')); //true
console.log(checkProp({a:1,b:2},'z')); //false
