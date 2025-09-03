//common js module loader
const axios= require('axios');
const username='michael';
const url=`https://api.genderize.io/?name=${username}`;

//why are promises used?-they are moder way of handling asunc operations
//whar are async operations?-operations that atke time to execute
//3 states of a promise objject
axios.get(url) //pending==initialized
.then((response)=>{  //fullfilled ==success
    const result = response.data;
    console.log(`The gender of ${username} is ${result.gender}`);
})

.catch((err)=>{ //rejected==failure
    console.log(err.message)});

