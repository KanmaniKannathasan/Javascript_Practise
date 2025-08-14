function findMax(arr)
{
    for(let i=1;i<arr.length;i++)
    {
        let max =arr[0]; 
        if(max<arr[i])
        {
            return max=arr[i];
        }
    }
    return max;

}
console.log(findMax([100,50,60,125,1,10]));