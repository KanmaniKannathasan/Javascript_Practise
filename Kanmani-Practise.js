
function strLength(arr){
    
   const result = arr.reduce((acc,cv)=> {
     acc[cv]=cv.length;
     return acc;
},{});
return result;
   
  
}
console.log(strLength(['abc','ab','a','abcd']));//{ abc: 3, ab: 2, a: 1, abcd: 4 }