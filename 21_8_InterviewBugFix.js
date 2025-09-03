// Bug Code
const developer={
    name:'sam',
    skills:['js','react','java','py'],
    details: function()
    {
        this.skills.forEach(function(ele) // bcoz of function expression , this refers to global object
    {
        console.log(`${this.name} knows ${ele}`);
    })
    }
}

developer.details(); // undefined knows js
//undefined knows react
//undefined knows java
//undefined knows py

//Fixed Code

const developer1={
    name:'sam',
    skills:['js','react','java','py'],
    details: function(){
        this.skills.forEach((ele)=>{
            console.log(`${this.name} knows ${ele}`); // bcoz of arrow fn, this refers to this from outer scope
        })

    }
}
developer1.details(); //sam knows js
//sam knows react
//sam knows java
//sam knows py

/// See Diagram in Notebook