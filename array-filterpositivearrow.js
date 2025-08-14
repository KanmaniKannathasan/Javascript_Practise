
 const allPositives=(numbers)=>{
  const result = numbers.filter((ele=> ele>0))
  return result;
 }


console.log(allPositives([1, 2, 3, -10, -5, 7]));
