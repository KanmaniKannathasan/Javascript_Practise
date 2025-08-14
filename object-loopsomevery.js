const arr1=[11,12,13,15,17];
//one or more even number
const result=arr1.some((ele)=>{
    return ele%2==0;
});
console.log(result);

//every - every(all)elements should satisfy the condition
const arr2=[99,101,103];
// check every element is odd
const result1=arr2.every((ele)=>{
    return ele%2 != 0;
});
console.log(result1);