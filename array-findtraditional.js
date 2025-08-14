function findGreater(arr, n) 
{
  let result;
  for (let i = 0; i < arr.length; i++) 
    {
        if (arr[i] > n) 
        {
            result = arr[i];
            break;
        }
    }
  return result;
}
console.log(findGreater([10, 15, 20, 25, 30], 22)); // To get first number greater than 20 -25
