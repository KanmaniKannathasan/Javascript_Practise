const arr=[10,11,12,13,14];

const getEvens= function(arr){
    const result=arr.filter(ele=>ele % 2 == 0)
    return result;
}
console.log(getEvens(arr))
