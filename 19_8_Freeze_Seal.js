//Freeze ( No Adding property and no updating the existing property)
const person={id:1,name: 'steve'};
person.age=26;
console.log(person);//{ id: 1, name: 'steve', age: 26 }
Object.freeze(person);
console.log(Object.isFrozen(person));//true
person.age=27;
console.log(person);//{ id: 1, name: 'steve', age: 26 }

// Sealed ( No Adding property but update the existing property)
const student={id: 2, name: 'sam', course:'Mechanical'};
Object.seal(student);
console.log(student);//{ id: 2, name: 'sam', course: 'Mechanical' }
student.course='Electrical';
console.log(student);//{ id: 2, name: 'sam', course: 'Electrical' }
console.log(Object.isSealed(student)); // true