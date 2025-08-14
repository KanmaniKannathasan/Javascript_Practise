function countCharacters(str,char)
{
    let count=0;
    for(let i=0;i<str.length;i++)
    {
        if(char==str[i])
        {
            count++;
        }
    }
    return count;
}

const r1=countCharacters('abcdaba','a');
console.log(r1);
console.log(countCharacters('ddddaab','d'));