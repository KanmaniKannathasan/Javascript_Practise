function getVowels(arr)
{
    const vowels='aeiou';
    const result= arr.filter(function(ele)
    {
        return vowels.includes(ele);
    });
    return result;
}
console.log(getVowels(['a','e','i','o','u','k','c','b']));