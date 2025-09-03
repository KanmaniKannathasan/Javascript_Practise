let num=5;
let name='steve';
const age=26;
function scope()
{
    let num=10;
    console.log(num);//10
     name='sam';
     age=20; //throws erroe as const cant be modified
}
//console.log(num);
scope();
console.log(num); //5 
console.log(name); //sam
// global variable is reassigned from 5 to 10 if the num inside fn is declared without any declaration of let or const;