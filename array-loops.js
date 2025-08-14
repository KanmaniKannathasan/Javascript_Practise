const fruits = ["mango", "orange", "banana"];
//ascending
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
console.log("----------------");
//descending or reverse
for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(fruits[i]);
}
console.log("----------------");
//for of loop
for (let ele of fruits) {
  console.log(ele);
}
console.log("----------------");
//for of loop reverse order(not recommended)
fruits.reverse();
console.log(fruits);
for (let ele of fruits) {
  console.log(ele);
}
