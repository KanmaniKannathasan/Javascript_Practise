const obj1 = { a: 1, b: 2 };
const obj2 = {};

// extract all the keys
console.log(Object.keys(obj1)); // ['a', 'b'] which is an array
//extract all values
console.log(Object.values(obj1)); // [1 , 2] which is again an array

//convert object to array - to check whether its is an
//empty object since we dont have any lengthroerty in object 
//we convert to array to get length
console.log(Object.entries(obj1)); //[['a',1], ['b', 2]]
console.log(Object.entries(obj1).length);//2

//count number of key values pairs
console.log(Object.keys(obj1).length); //2 (as Object.keys(obj1) retuens array for keys ['a', 'b'] so we use length)  )
console.log(Object.keys(obj2).length); // 0
console.log(Object.values(obj1).length); //2
console.log(Object.values(obj2).length); //0

//chech if object is empty
console.log(Object.keys(obj1).length == 0); // false
console.log(Object.keys(obj2).length == 0); // true

//check if a property(key) exists in an object
console.log("a" in obj1); // true
console.log("2" in obj1); //false

console.log(obj1.hasOwnProperty("a")); // true
console.log(obj1.hasOwnProperty("z")); // false
