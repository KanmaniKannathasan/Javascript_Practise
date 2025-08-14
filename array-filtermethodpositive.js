function allPositives(numbers)
{
    let result=[];
    for(let i=0;i<numbers.length;i++)
    {
        if(numbers[i]>=0)
        {
            result.push(numbers[i]);
        }
    }
    return result;
}

console.log(allPositives([1, 2, 3, -10, -5, 7]));