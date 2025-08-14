const arr = [10, 11, 12, 13, 14];

const result = arr.map(ele=>
{
    if(ele%2==0)
    {
        return ele+2;
    }
    else
    {
        return ele;
    }
    return result;
});
console.log(result);