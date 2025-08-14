const fruits=['mango','apple'];
console.log('outside functiion before innvocation', fruits);

function addFruits(fruits, newFruit)
{
    console.log('Inside function before adding', fruits);
    // any changes made to an object , will reflect the 
    // function, bcoz of pass by reference 
    fruits.push(newFruit);
    console.log('inside function after adding',fruits); //['mango','apple','orange']

}

addFruits(fruits,'orange'); // fruits is an object , hence pass by reference
console.log('outside function after invocation',fruits); //['mango','apple','orange']

