//JSON- javascript object Notation
//structured,lightweight and used for storing data or configration

// past - xml(ectensible markup language)-where we can add our own tags
const person={id:1, name:'steve'};
console.log(typeof person); //object

//convert object to strinf(stringifying)
const strObj=JSON.stringify(person);
console.log(strObj); 
console.log(typeof strObj) // string

// convert string object back to object(parsing)
const parsedObj = JSON.parse(strObj);
console.log(parsedObj);
console.log(typeof parsedObj); //object


//deep copy of nested objects
//json.parse(JSON.stringify(obj))

//new approach-structuredClone()