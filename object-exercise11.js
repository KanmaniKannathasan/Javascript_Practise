function total(cart)
{
    let sum=0;
    for(let keys in cart)
    {
        sum+=cart[keys];
    }
return sum;
}
console.log(total({marker: 50, scale:25, box:100}));//175