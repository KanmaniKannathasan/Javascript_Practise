let marks=[70,80,90];
let sum =0;

for (let i=0;i<marks.length;i++)
{
    sum += marks[i]
}

let avg = sum/marks.length

console.log(`The total marks is ${sum} and the average mark is ${avg}`)
