//Singleton Design Pattern - When me add methods only for specific objects
//Eg -A method has to be accessible only to Admin

//This will work for my fruits array and not for names array
const fruits=['cherry','custard apple','orange'];
fruits.first = function(){
    return this[0];
};
console.log(fruits.first()); //cherry

const names=['virat','dhoni','sachin']
//console.log(names.first());// throws error


//Adding the methods to the Prototype Level
function Players(pName,pCountry,pRuns){
    this.name =pName;
    this.country=pCountry;
    this.runs=pRuns;
} 
// For reducing the Memory 
Players.prototype.details=function(){
    return(`${this.name} plays for ${this.country}`);
}
Players.prototype.totalRuns = function(){

    return this.runs.reduce((acc,cv)=> acc+cv);
}
const ps1=new Players('virat','India',[100,50,20]);  
console.log(ps1); //Players {name: 'virat',country: 'India',runs: [ 100, 50, 20 ]} - details method is not here but the details are actually present in its prototype
console.log(ps1.details()); //virat plays for India
console.log(ps1.totalRuns()); //170

const ps2=new Players('dhoni','India',[50,50,50]);  
console.log(ps2.details()); //dhoni plays for India
console.log(ps2.totalRuns());//150


