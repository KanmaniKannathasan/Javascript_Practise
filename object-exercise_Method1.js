//sir used method
function checkProp(obj, prop) {
  return prop in obj;
  // or return obj.hasOwnProperty(prop);
}
console.log(checkProp({ a: 1, b: 2 }, "a")); //true
console.log(checkProp({ a: 1, b: 2 }, "z")); //false
