// Shadowing - City is shadowing from outerscope- redeclaration is happening in different scope
let city = "Delhi";
function travel()
{
let city = "Pune";
console.log(city); // Output:
}
travel();
console.log(city); // Output:

// example 2
function getValue(arr,ele)
{
    const result= arr.filter((ele)=>{
        return ele==ele;
    })
    return result; //[ 'a', 'a', 'b', 'c', 'b' ]

}

console.log(getValue(['a','a','b','c','b'],'b')); //['b','b']

//correction of example 2 to avaoid shadowing
function getValue1(arr,char)
{
    const result= arr.filter((ele)=>{
        return ele==char; //[ 'b', 'b' ]
    })
    return result; //[ 'a', 'a', 'b', 'c', 'b' ]

}
console.log(getValue1(['a','a','b','c','b'],'b')); //['b','b']

// method 2 -Global variable 
const char='a';
function getValue2(arr,char)// here the value of char will be 'b' 
// and not 'a' as char is shadowing and it will take the value of the argument and not the value of global variable
{
    const result= arr.filter((ele)=>{
        return ele==char; //[ 'b', 'b' ]
    })
    return result; 

}
console.log(getValue2(['a','a','b','c','b'],'b')); //['b','b']
