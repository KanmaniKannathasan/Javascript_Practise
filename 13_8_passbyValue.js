let a=10, b=20;
console.log("Outside function before invocation",'a',a,'b',b); // 10 20

function alter(a,b)
{
    console.log('inside function before updating','a',a,'b',b); //10 20
    a=100 , b=200; // chnages made to a & b will not reflect outside 
    // the function , bcoz a & b is holdin primitive datatype and they are pass by value
    console.log('Inside function after updating','a',a,'b',b); // 100 200
    //return [a,b] or return a,b;
}

alter(a,b); // primitive datatypes are pass by value
console.log("outside function after invocation",'a',a,'b',b); // 10 20 i.e after invocation the value are gona be same