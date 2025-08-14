const numbers=[5,6,7]
const addIndex= (arr)=>{
    const result= arr.map((ele,i) => ele +i);
    return result;
};
console.log(addIndex(numbers));//[5,7,9]