function getEvens(arr)
{
    let count=0;
    let result=[];
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]%2==0)
        {
            result.push(arr[i]);

        }
    }
    return result;

}

console.log(getEvens([1,2,3,4]));
console.log(getEvens([20,22]));
console.log(getEvens([1,3,5]));
console.log([]);