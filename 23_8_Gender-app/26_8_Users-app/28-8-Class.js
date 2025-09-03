//multiple objects,which has the same set of properties and methods-we can
//create them using constructor function
//constructor function aka class
//class- blueprint of an object, collection of items with
//same properties,create user defined data types

//single object -object literal-{ } or new object()
//python - key value pairs are stored in dictionaries, java- hash map

//naming convension for constructor function/class-Pascal casing
//Eg: Player,PlayerDetails,Order,OrderLineItems


function Player(pName,pCountry,pRuns){
    //When a new keyword is used with const fn what all happens-
    //1.Implicitly empty object is assigned to this
    //2.Explicitly properties are assigned to this
    //properties
    this.name =pName;
    this.country=pCountry;
    this.runs=pRuns;
    //3.Implicitly returns value of this
}
 
const p1=new Player('virat','India',[100,50,20]); // when a new keyword is used on a constructor function all the three steps are invoked 
console.log(p1); // Player { name: 'virat', country: 'India', runs: [ 100, 50, 20 ] }
console.log(typeof p1); //'object'
console.log(p1 instanceof Player); //true
console.log(p1 instanceof Array); //false

//Example 2
function Players(pName,pCountry,pRuns){
    //When a new keyword is used with const fn what all happens-
    //1.Implicitly empty object is assigned to this
    //2.Explicitly properties are assigned to this
    //properties(i.e adding the parameters to the object)
    //and this below 3 lines of code is  gona be the blueprint of the object i.e
    //we are defining the structure once and reusing the structure for one or many objects  
    
    //properties
    this.name =pName;
    this.country=pCountry;
    this.runs=pRuns;

    //method -if we define the method inside the constructor -it is available inside every
    //object
    this.details =function(){
        return `${this.name} plays for ${this.country}`;
    }
    //3.Implicitly returns value of this
} 
const ps1=new Players('virat','India',[100,50,20]);  
console.log(ps1); //Players {name: 'virat',country: 'India',runs: [ 100, 50, 20 ],details: [Function (anonymous)]}
console.log(ps1.details()); //virat plays for India

const ps2=new Players('dhoni','India',[50,50,50]);  
console.log(ps2); //Players {name: 'dhoni',country: 'India',runs: [ 50, 50, 50 ],details: [Function (anonymous)]}
console.log(ps2.details()); //dhoni plays for India

//Memory calcultaion see notes

//Why we call class as blue print because p1 has name,country,runs , p2 has the same arguments .
const temp =p1 // same concept copy by reference ,deep copy ..

//Properties are nothing but the information ,data or variables inside object or attributes
// and properties also consists of methods  i.e behaviour