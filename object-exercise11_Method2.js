function total(cart)
{
    console.log(Object.entries(cart)) //[ [ 'marker', 50 ], [ 'scale', 25 ], [ 'box',100 ] ]
    console.log(Object.values(cart)) // [ 50, 25, 100 ]
    const result=Object.values(cart).reduce((acc,cv)=>
    {
        return acc+cv;
    },0);
    return result;
    
}
console.log(total({marker: 50, scale:25, box:100}));//175