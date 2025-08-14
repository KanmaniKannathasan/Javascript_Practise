function findGreater(arr, n) 
{
    const result= arr.find(function(ele)
{
    return ele>n;
})
return result;
}
console.log(findGreater([10, 15, 20, 25, 30], 22)); // To get first number greater than 20 -25
console.log(findGreater([10, 15, 20, 25, 30], 100)); //undefined