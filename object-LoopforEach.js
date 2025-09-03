// order of loop types based on fastness
//for loop - string + Array
//forEach - Array
//for of - string + Array

//for in - Object + Array(but not recommended for array)
const fruits = ["mango", "orange", "banana"];
fruits.forEach((ele) => {
  console.log(ele.toUpperCase()); //MANGO ORANGE BANANA
});

const obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
  console.log(`key-${key} : value-${obj[key]}`); //key-a : value-1 key-b : value-2 key-c : value-3
}

Object.keys(obj).forEach((key)=>
 {
  console.log(key,obj[key]); //a 1 b 2 c 3
 })
