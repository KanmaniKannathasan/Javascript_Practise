//create an object which has 2 key value pairs
// a=1,b=2
const obj = { a: 1, b: 2 };
console.log(obj);
console.log(typeof obj); // object
console.log(Array.isArray(obj)); //false

// add another key c with value 3
obj.c = 3;
console.log(obj);

//udate the value of key b with 20
obj.b = 20;
console.log(obj.b);

//remove the key a from the object
delete obj.a;
console.log(obj);
