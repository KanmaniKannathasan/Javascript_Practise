const nums = [10, 15, 20, 30];
const i = nums.indexOf(20);
nums.splice(i, 1); // we also use without assigning to i and direcly use them on splice
console.log(nums);//[ 10, 15, 30 ]
