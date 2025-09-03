const axios=require('axios');
const id=1;
axios.get(`https://jsonplaceholder.typicode.com/users/${id}`) // initialise
.then((response)=>{
    result=response.data;
    console.log(result);
    console.log(`username-${result.username}
email-${result.email}
city-${result.address.city}
latitude-${result.address.geo.lat}
longitude-${result.address.geo.lng}
Website-${result.website}
companyname-${result.company.name}`);
    })
//username-Bret
//email-Sincere@april.biz
//city-Gwenborough
//latitude--37.3159
//longitude-81.1496
//Website-hildegard.org
//companyname-Romaguera-Crona
.catch((err)=>{
    console.log(err);
})


