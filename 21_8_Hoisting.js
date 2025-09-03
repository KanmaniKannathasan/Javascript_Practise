//var-function scoped,can redeclare ,can reassign,hoisted
//only the variabe declaration gets hoisted to the top of the scope

// even before we declare the value for city we can call the variable 
// as the 'var city' is moved to top and the value will be undefined
//these are most important feature in ES6

console.log(city); //undefined
var city='banglore';
console.log(city);//bangalore

//Global Scope 
//console.log('inside print',msg); //Reference error as var is Function scoped 
function print() //function scope
{
    console.log('inside print',msg); //undefined as var is hoisted
    if(true) //block scope
    {
        var msg="Hi There";
    }
    console.log(msg); // Hi There as it is function scope
}
print();


//let & const are not hoisted
//console.log(city1); // reference error : Cannot access 'city1' before initialization
let city1='bangalore';
console.log(city1);

function print1()
{
    //console.log('inside print',msg); //Reference Error as it is not hoisted
    if(true)
    {
        let msg="Hi There";
    }
    //console.log(msg); // Reference error as let is block scoped
}
print1();

// cannot use
//var city='bangalore'
//const city='bangalore'
//let city='bangalore'

//Function Declaration is Hoisted 
console.log('print2 is',print2()); // undefined as 
// function declaration are also hoisted and calls the fn print2--very important
function print2()
{
    console.log('inside print is',msg); //undefined as var is hoisted
    if(true)
    {
        var msg="Hi There print2";
    }
    console.log(msg); // Hi There as it is function scope
}
//print2();again calls  the fn

//Function declaration is hoisted
greet(); //will work
function greet()
{
    console.log("Hi");
}

//but not the function expression
sayHi(); // Type error : sayHi is not a function
var sayHi=function()
{
    console.log('Hi');
}

//Typeof undefined will be a string
console.log('The type of username is',typeof username); //'undefined'
var username='John';