const username='raj', email='raj@gmail.com';
const user={
    //key:value
    username: username, //property name is username and ariable name is : username
    email:email
};
console.log(user); //{ username: 'raj', email: 'raj@gmail.com' }

//ES6 fetaure- concise property or short hand property is used
//when the property name and the variable is the same, omit property name 
//and just use the variable name

const person={
    username,
    email
};
console.log(person); //{ username: 'raj', email: 'raj@gmail.com' }


