/*These all are interview questions
why there are so many functions in js ?
Ans:
Javascript - Functional programming languages - and its core requirement for functional prog langiage is to find 
    pure function(deep copy, shallow copy etc...)
lly Scala -Functional programming

Why function? - Reusing the code 

function declaration -hoisted
    function greet(name){
    //reusuable code
    return 
    }
    greet('punith')

function expression - Function being assigned to a variable and its not hoisted
    const greet=function(username){ // anonymious function
    //logic
    return \
    }
    greet('suraj');

//All the function expressions an be converted to arrow function 
    const greet=(username)=>{ //arrow function
        //logic
        return}
    greet('suraj');

    
callback function - function passed as an argument to another function, 
    can be executed now or a later point in time
    //executed immediately (complete it suing sirs video)
    [10,20,30].filter((ele)=>{
        return ele>15});

    //executed later
    setTimeout(()=>{
        console.log('Hi')}, 3000)
    //executed later also include -event handler(based on user interactions we triger functions )

Higher Order Function -function which accepts another function as an argument 
                    or returns a function as a value is called as higher order function
                    anonymous function
    example - filter(function(){}) - Here filter is a higher order function as its accepting another function as an argument,
     simialarly -find(function(){}), 
                reduce((acc,cv)=>{}),
                .then(()={})

anonymous function - function without a name use it where ever there is function expression (callback function)
    not use anonymous fn - as object methods because we lose the context of the 'this' keyword, 'this' now 
        uses the value from the outer scope
        inside method - what this be? it should refer to the current object 

arrow function -where ever there is function expression or callback function can use.
    not use- as object methods,why? we lose the context of the this keyowrd
    inside methods -what this be? it should refer to the current object
    
predicate function- function when return true or false, primarly used in filter & filter & find methods,can
    also be called test function

impure function - provide same arguments, we get different outputs
pure function - provide same aruments,we get same object


iife-iimediately invoked function expression
test function
function inside an object aka(as known as) method
main function

async function 
    // setTimeout - makes the code to delay 
setTimeout(()=>{
    console.log('function executed after 2.5 seconds')
,2500});

----------------Constructor---------------------
How will you create multiple objects with the same set of properties and methods

Ans: 
In JS we use
constructor function - are used to create multiple objects with the same set of properties and methods
constructor function is  a blueprint of an object

And in java ,python we use
class- is used to create multiple objects with the same set of properties and methods
    class is a blueprint of an object


//Object literal -i.e is single object that we have created
const p1={
    //properties
    //information stored in key:value
    name:'virat',
    runs:[10,20,30],
    //methods
    calcAvg: function(){
        const total=this.runs.reduce((acc,cv)=>acc+cv);
        return total/this.runs.length;
    }
}
console.log(p1); //{name:'virat',runs:[10,20,30],calAvg:[Function:calAvg]} 
console.log(p1.calcAvg()); //20

If I want to create multiple objects with same sets of properties and methods
like:
const p2={
name:'virat',
    runs:[10,20,30],
    //methods
    calcAvg: function(){
        const total=this.runs.reduce((acc,cv)=>acc+cv);
        return total/this.runs.length;
    }
}

// I need to duplicate my code and
//  I need to find the same for nth object i.e 'pn' and
//  tomorrow I decide to add extra property to my object then it will be very hard for me to make the changes
so we use constructor
*

///// Actual Constructor Function
//Interview Question
//function Player(){
    
//}
//const p1= Player();
//without new keyword -undefined
//console.log(p1); //undefined - when we call only by using the constructor name because there is no return value

//But cosntructor object is used to create a new object
//with new keyword -{}
//const p1= new Player();
*/


//constructor function name -should be in capital letter to differentiate between regular fn and constructor fn 
function Player(pName,pRuns){ // 3 steps involved when working with constructor function
    //when a new keyword os assigned to the const fn -
    //1st -implicity(by default) an empty object is created and assigned to the this keyword
    //2nd -you assign properties and values to this keyowrd
    this.name =pName;
    this.runs =pRuns;
    //3rd -implicity(by default) the this value is returned i.e no need to write code as 'return this'
}
const p1= new Player('virat',[10,20,30]);
console.log(p1); // Player { name: 'virat', runs: [ 10, 20, 30 ] }
// Now from outside your cosntructor fn, we can create multiple objects  which has same properties

const p2= new Player('dhoni',[50,60,70]);
console.log(p2); //Player { name: 'dhoni', runs: [ 50, 60, 70 ] }
const p3=new Player('rohit',[100,80,70]);
console.log(p3); //Player { name: 'rohit', runs: [ 100, 80, 70 ] }
//const p1= new Player();
//console.log(p1); // {}

