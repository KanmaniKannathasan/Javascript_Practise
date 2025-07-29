const str = "+++--+";
let pluscount = 0,
  minuscount = 0;
for (let i = 0; i < str.length; i++) {
  if (str[i] == "+") {
    pluscount++;
  } else {
    minuscount++;
  }
}
//console.log("plus -" + pluscount + ", minus-" + minuscount);
console.log(`plus - ${pluscount}, minus - ${minuscount}`);
