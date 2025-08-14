const dev = {
  age: 25,
  yearOfPassout: 2025,
  firstName: "john",
  lastName: "smith",
  email: "johnsmith@gmail.com",
};
console.log(dev);
console.log(dev.email);
console.log(dev.address); // undefined
dev.contact = ["912356890", "900567832"];
console.log(dev);
dev.address = {
  temporary: "bangalore",
  permanent: "chennai",
};
console.log(dev);
console.log(dev.address.permanent);

//access key:value
console.log(dev.firstName); //john
console.log(dev["firstName"]); //john

//update key :value
dev.firstName = "joe";
console.log(dev.firstName);

//add key:value pair
dev.country='India';
console.log(dev);

//remove a key
delete dev.age;
console.log(dev);