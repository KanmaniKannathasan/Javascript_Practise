/* Question: 
1.Fetch all the todos belonging to a user
url:https://jsonplaceholder.typicode.com/users/1/todos
Total Todos -20
Completed Todos - 12
Pending Todos -8

2.Listing Complted Todos -12
*T1
*T3 ......
3.Listing Pending Tools -8
*T2
*T4.......
*/
const axios=require('axios');
const id=1;
const url=`https://jsonplaceholder.typicode.com/users/${id}/todos`;

axios.get(url)
.then((response)=>{
const todos=response.data; 
const completedTodos = todos.filter((ele)=>{
    return ele.completed; // It will return all the true values
    //return ele.completed==true; // no need the above line itself will return the true values
})
const pendingTodos =todos.filter((ele)=>{
        return !ele.completed; // this will return the false todos 
    //return ele.completed==false;
})
console.log(`Total Todos-${todos.length}`);
console.log(`Completed Todos- ${completedTodos.length}`);
console.log(`Pending Tools -${pendingTodos.length}`);
console.log(" "); // or we can also use ("\n")
console.log(`Listing Completed Todos-${completedTodos.length}`);
completedTodos.forEach((ele)=>{console.log(ele.title)});
console.log(`Listing Pending Todos-${pendingTodos.length}`);
pendingTodos.forEach((ele)=>{console.log(ele.title)});
})
.catch((err)=>{
    console.log(err.message);
})