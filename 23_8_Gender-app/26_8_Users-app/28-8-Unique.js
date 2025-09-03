const arr =[10,20,10,20,30];

const result = arr.filter(function(ele,i){
    return arr.indexOf(ele)==i; // indexOf - will return the index of first occurance and Refer Iteration table in Notebook
});
console.log(result);//[10,20,30]



//console.log(arr.unique());