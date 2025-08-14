//using for of loop and no for loop as we don't need any index of key and just need all key values
function charAscii(str)
{
    const result={};
    for(let keys of str)
    {
        result[keys]=keys.charCodeAt();
    }
    return result;
}

console.log(charAscii('abc'));//{a: 97,b:98,c:99}