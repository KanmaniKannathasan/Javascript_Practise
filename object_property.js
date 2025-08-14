const obj = { a: 1, b: 2, c: 3 };

const prop = "b";
console.log(obj.prop); //undefined as it is looking for property/key named prop
console.log(obj["prop"]); // undefined
console.log(obj[prop]);
