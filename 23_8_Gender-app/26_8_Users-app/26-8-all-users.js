const axios=require('axios');
//const id=1;
axios.get(`https://jsonplaceholder.typicode.com/users`) // initialise
.then((response)=>{
    result=response.data;
    console.log(result);
    const users = result;
    console.log(users.length); 
    users.forEach((ele)=>
    {
        console.log(ele.username);
    })
})
.catch((err)=>{
    console.log(err);
})


