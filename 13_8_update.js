const cart =[
    {prodId: 101, name: 'marker', qty: 1},
    {prodId: 211, name: 'scale', qty: 2},

]
//update the quantity by 1 of proID 211

// step 1-find the product
const product= cart.find((ele)=> ele.prodId==211);
console.log(product); // product from the array is returned

// step 2-Update the qty
// any changes made to the variable,will reflect within the array because, of copy by reference
product.qty +=1;
console.log(product);
console.log(cart);

const arr2=[{name: 'john'}, {name:'punith'}];
const user=arr2[1]; // copy by reference / shallow copy
console.log(user); //{name:'punith'}
user.name='raj';
console.log(user); //{name: raj}
console.log(arr2); // [{name: 'john'}, {name:'raj'}]

// primitive - updating the value in any index will not reflect in the main array 
const arr3=[10,20,30];
let n= arr3[1];
console.log(n);
n=50;
console.log(n);
console.log(arr3);