Array.prototype.first = function(){
    return this[0];
}

Array.prototype.last = function(){
    return this[this.length -1];
}

const fruits=['cherry','mango'];
console.log(fruits.first()); // cherry
console.log(fruits.last());//mango

// so if this is not used inside first and last then every time we need to chane the hard code of fruits to vegetables and so , so this will refer to all the objects that we are creating
const vegetable=['carrot','brocoli','potatos'];
console.log(vegetable.first());
console.log(vegetable.last());