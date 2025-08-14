function checkVowel(str)
{
    const result={};
    const vowel='aeiou';
    for(let i=0;i<str.length;i++)
    {
        result[str[i]]={
            index:i,
            isVowel: vowel.includes(str[i])
        }
    }
    return result;

}

console.log(checkVowel('react')); // { r: {index:0, isvowel:false} , e: {index:1, isvowel:true}, ..}