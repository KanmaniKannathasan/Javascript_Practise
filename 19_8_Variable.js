let city="bangalore";
// redeclartion is not possible here with same variable name
function WorkLocation()
{
    let city="Mysore"; // redeclartion is possible inside the fn with same variable name
    console.log(city); //Mysore
}
console.log(city); // bangalore
WorkLocation();
console.log(city); //bangalore