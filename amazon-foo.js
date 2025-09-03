const str=['He', 'foo', 'is','foo','foo','my','foo','friend'];

const filteredwords = str.filter(function(ele){
    return ele!='foo';
    
})

let result = filteredwords.join(' ');
console.log(result);

