function sumElements(arr)
{
    const result= arr.reduce(function(acc,cv)
{   
    return acc+=cv;

},0)
return result;
}
console.log(sumElements([10,20,30,40]));

// See the iteration table in notebook for better understanding