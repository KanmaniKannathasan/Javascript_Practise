// Frequency Distribution
function frequency(str)
{
    const result={};
    for(let keys of str)
    {
        if(keys in result)
        {
            result[keys]+=1;
        }
        else
        {
            result[keys]=1;
        }
    }
      return result;

}
/// iteration table in notebook

console.log(frequency('aabcc'));
//{a: 2, b:1, c:2}