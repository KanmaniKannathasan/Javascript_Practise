function strIndex(str){
    const result={};
    for(let i=0; i<str.length;i++)
    {
        result[i]= str[i];
    }
   return result;
}
console.log(strIndex('dct')); //{ 0: 'd' , 1: 'c' , 2: 't'}