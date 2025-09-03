const axios = require('axios');
const username='kate';
const url= `https://api.genderize.io/?name=${username}`;

//callback-function passed as an argument to another function,to be executed a later point in time.
axios.get(url)
    .then((response)=>{
        const result= response.data;
        //console.log(result); // { count: 302293, name: 'kate', gender: 'female', probability: 0.99 } i.e all the data from the api 
        //console.log(response); // will give the whole object in which we need only data i.e { count: 302293, name: 'kate', gender: 'female', probability: 0.99 }
        console.log(`The gender of ${username} is ${result.gender}`); //The gender of kate is female
    })
    .catch((err)=>
    {
        console.log(err.message);
    })