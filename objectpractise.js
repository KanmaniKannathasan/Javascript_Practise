const student={
    name: 'rahul',
    age: 23,
    email:'rahul@gmail.com',
    course: 'full stack development course'
};

for(let key in student)
{
    console.log(key,student[key]);
}