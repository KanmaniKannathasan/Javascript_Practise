const str = "java";
const strArr = str.split('');
console.log(strArr); // [ 'j', 'a', 'v', 'a' ]
console.log(strArr.reverse()); //[ 'a', 'v', 'a', 'j' ]
console.log(strArr.reverse().join(''));// java