
const strLength= (arr)=>
{
    const result={};
    for(let key of arr)
    {
        result[key]=key.length;  // since they keys are in array
    }
    return result;


}
console.log(strLength(['abc','ab','a','abcd']));//{ abc: 3, ab: 2, a: 1, abcd: 4 }