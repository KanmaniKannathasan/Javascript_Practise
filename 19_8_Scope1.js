function loop()
{
for(var i=0;i<=3;i++)
{
    console.log(i); // 123
}
console.log(i); //4
}
loop();

function loop1()
{
for(let i=0;i<=3;i++)
{
    console.log(i); // 123
}
console.log(i); //error
}
loop1();