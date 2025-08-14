function carTotal(arr)
{
    const total= arr.reduce(function(acc,cv)
{
    return acc+=cv;
})
return total;
}

console.log(carTotal([45,45,60]));