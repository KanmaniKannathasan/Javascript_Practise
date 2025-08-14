function frequency(str)
{
    const result={};
    for(let keys of str)
    {
        if(keys in result)
        {
            result[keys]+=1;

        }
        else{
             result[keys]=1;
        }
    }
   
    for( let key in result)
    {
        if(result[key]==1)
        {
             return key;
        }
    }
  console.log(key);
}

console.log(frequency('aaabcc'))