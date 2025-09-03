const user={ username:'raj', email:'raj@gmail.com'};
console.log(user); //{ username: 'raj', email: 'raj@gmail.com' }

// Ways to check how email property is present in user object
console.log('email' in user);//true
console.log(Object.keys(user).includes('email')); //true
//Most important and the way that we are going to use is 
console.log(user.hasOwnProperty('email')); //true
 // hasOwnProperty is a method which we actually didnot define inside the user object so go to browser and check
 //it will be inside the Prototype