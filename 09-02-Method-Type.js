//Instance Method - are thise called on objects(instances)
//You need to have an object ti call the method
//In JS- Instance methods are added to the prototype of the constructor function
const a1=new Array();
a1.push(20);
//invalid Array.push(20) - as array is a constructor 

const str='dct';
str.toUpperCase();
//invalid String.toUpperCase() - as string is a constructor 
const obj={a:1 , b:2}
obj.hasOwnProperty('a');

//static method - are those called on classes(constructor function)
//you don't need to have an object to call the method
//In JS -Static methods are added directly on the constructor function

Array.isArray(a1);
Object.keys(obj);

//mutable methods -push(), pop(),shift(),unshift(),splice()
//are those that changes the value of the variable

//immutable methods- indexOf(), includes(),filter(), slice()
//are thise that donot change the value of the varible

