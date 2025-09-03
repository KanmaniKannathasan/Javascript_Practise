//impure function- are the function that return different output for the same inputs.
const fruits=['mango','orange'];
function addFruit(fruits,fruitName)
{
    fruits.push(fruitName);
    return fruits;

}
console.log(addFruit(fruits,'chikko'));//[ 'mango', 'orange', 'chikko' ]
console.log(addFruit(fruits,'chikko'));// [ 'mango', 'orange', 'chikko', 'chikko' ]
console.log(addFruit(fruits,'chikko'));//[ 'mango', 'orange', 'chikko', 'chikko', 'chikko' ]

// pure function -React js

// pure function- are the functions that return the same output for the same inputs.
// how to convert impure function to pure function
const fruit=['mango','oragne'];
function addFruit(fruit,fruitName)
{
    //const newArr= fruits shallow copy(copy by reference)
    //deep cpy of an array
    //1.
    // const newArr=[...fruits];
    //newArr.push(fruitName);
    //2.
    const newArr=[...fruit, fruitName];
    return newArr;
}

console.log(addFruit(fruit,'chikko'));//[ 'mango', 'orange', 'chikko' ]
console.log(addFruit(fruit,'chikko'));//[ 'mango', 'orange', 'chikko' ]
console.log(addFruit(fruit,'chikko'));//[ 'mango', 'orange', 'chikko' ]

