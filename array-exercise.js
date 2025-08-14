const numbers = [10, 11, 12, 13, 14];
let result = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    result.push(numbers[i]);
  }
}
console.log(result);

// Here we are using result because the original array can never be used so always take new array while doing any operations- Virtual doming
console.log('-----------------');
let result2=[];
for(let i=numbers.length-1;i>=0;i--)
{
    result2.push(numbers[i]);
}
console.log(`The reversed array is ${result2}`);
console.log('-----------------');

const arr=[1,'a',2,'b',3,'c'];
let result3="";
for(let i=0;i<arr.length;i++)
{
    if(typeof(arr[i]) =='string')
    {
        result3+=arr[i];
    }
}
console.log(result3);
