// Different Objects in JS- Array , object ,date, function(special object)

function greet(name)
{
    return `Helli, ${name}`;
}
//invoking a function
console.log(greet('punit'));

console.log(typeof greet); //function
console.log(greet.length); //1 (no. of parameters passing in function)
//invokin a function 
console.log(greet.call({},'mark')); // here {} is this keyword, o/p - Hello, mark(call method)

const today= new Date();
console.log(today);
console.log(today.getFullYear()); //2025
console.log(today.getMonth()); //7

// Jan = 0 to dec-11 in JS

//Object literal-
const person={
    //key: value
    //storing information
    firstName: 'Punith',
    lastName:'raj',
    //methods-behaviour
    //methods are functions inside an object
    // property which holds function as a value is a method
    fullName: function(){
        //inside a method 'this' refers to current object
        return `${this.firstName} ${this.lastName}`;
        // bad practise - return `${person.firstName} ${person.lastName}`; 
    }
}
console.log(person.fullName()); // Punit raj
//OOPS
//Class (Blue print of an object)
//a new object is created using new keyword
