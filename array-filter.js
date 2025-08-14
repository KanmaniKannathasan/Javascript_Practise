function getEvens(arr)
{
    const result=arr.filter(function(ele)
    {
        return ele %2==0;
    }
    )
    return result;
}

console.log(getEvens([10,11,12,13,14]));