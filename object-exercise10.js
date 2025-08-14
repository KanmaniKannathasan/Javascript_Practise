function swap(obj) {
  const result = {};
  const temp = "";
  for (let keys in obj) {
    const newkey=obj[keys];
    const newvalue= keys;
     result[newkey]=newvalue;
     // or result[obj [keys]]= keys;
  }
  return result;
}

console.log(swap({ green: "peace", blue: "tranquility" }));
//{peace:'green' , tranquility: blue }
