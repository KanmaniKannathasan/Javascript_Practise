const axios=require('axios');
const username='Kanmani';
const url=`https://api.genderize.io/?name=${username}`;


axios.get(url)
.then((response)=>{
    const result=response.data;
    console.log(`The gender of ${username} is ${result.gender}`);

})

.catch((err)=>{
    console.log(err.message);
})