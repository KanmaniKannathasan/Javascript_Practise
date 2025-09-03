// Value of this keyword in different scenerios

// Global scope - {}
console.log(this); //{}

//function scope - Gloal Object
function f1()
{
    console.log(this); // Global Object
}
f1()

//Function expression- Global Object
const f2=function()
{
    console.log(this); // global object
}
f2();

//Inside the Method - value is current object
const person=
{
    name: 'john',
    details: function(){
        console.log(this.name) // john
    }
}
person.details();

// Inside the arrow function - 
// arrow function don't have a value for this keyword of its own,
// they borrow the value of this keyword from its outer scope

//Example 1
const af=()=>
{
    console.log(this); // {} because outside the arrow fn it is {} i.e before the line cost af=()=> if we put con.log(this) vlue will be {}
}
af();

//Example 2 
function f3()
{

    const af= ()=> //arrow fn inside the fn
    {
        console.log(this); //global object
    }
    af();

}
f3();

// Next Interview Question - 
// Can I declare a method using arrow function?
// Answer is 'No' 
//Why? this is no longer refering to the
//  current object, but refering to the value of this
//  keyword from outside scope, eg:

//Example 1 - with global or outer scope

const person1={
    name: 'sam',
    details: ()=>
    {
        console.log(this); //{}
    }
    //details: function()
    //{
    // console.log(this);
    //}
}
person1.details();

//Example 2 - with function scope

function f4()
{
    const person2={
        name: 'john',
        details: ()=>{
            console.log(this); // global object
        }
    }
    person2.details();
}
f4();

//Example 3:
const person4={
    name: 'sam',
    details: ()=>
    {
        console.log(this.name); //undefined -as empty object and property will be undefined
    }
    //details: function()
    //{
    // console.log(this);
    //}
}
person4.details();

// 2 places where arrow function should not be used , they are for declaring methods and constructor function