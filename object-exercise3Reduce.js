const strLength=(arr)=>

{
    const result=arr.reduce(function(acc,cv)
    {
        acc[cv]=cv.length;
        return acc;
         
    },{});
    return result;
}

// See Notebook for iterations
console.log(strLength(['abc','ab','a','abcd']));//{ abc: 3, ab: 2, a: 1, abcd: 4 }