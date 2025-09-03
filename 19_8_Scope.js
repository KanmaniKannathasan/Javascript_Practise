//scope-life and accessibility of a variabke /function
//global scope

const city='bangalore';
function print()
{
    const location='Jayanagar'; // without the const declaration location will be globally accessible causing pollution in the js
    console.log(city,location);//bangalore Jayanagar

}
print();
console.log(city);// bangalore
//console.log(location); //error

// var function scope
//global scope
function print() // function scope
{
    if(true) // block scope-{ }
    {
        var msg='Hi there'; // declarin the vraiabke inside block, it will still be 
        //availabe inside the print(), because var keywords are function scoped
        console.log('inside block',msg); // inside block Hi there
    }
    console.log('outside block',msg); //outside block Hi there
}
print();

// let function scope

function print1()
{
    if (true)
    {
        let msg='Hi There';
        console.log(msg); // Hi There
    }
    //console.log(msg); //error
}
print1();