const obj = { a: 1, b: 2, c: 3 };
// for in
for (let key in obj) {
  console.log(key, obj[key]); // to access the value of key use square bracket obj[key] and
  //  dont use dot operator in loops as dot operator will assume as the key as property in obj
}
// ITERATION SEE IN NOTE BOOK
