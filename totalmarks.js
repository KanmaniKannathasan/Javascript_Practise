const arr=[60,70,80];
let total=0;
for(i=0;i<arr.length;i++)
{
    total+=arr[i];
}
let avg=total/(arr.length);

console.log(`Total marks is ${total} and the average is ${avg}`);