function checkVowel(str)
{
    const result={};
    const vowel='aeiou';
    for( let keys of str)
    {
        if(vowel.includes(keys))
        {
            result[keys]=true;
        }
        else{
            result[keys]=false;
        }
    }
    return result;

}

console.log(checkVowel('react')); // { r: false , e: true, a: true, c: false, t: false}