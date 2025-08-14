const products = [
  { id: 1, name: "Laptop", price: 55000 },
  { id: 2, name: "Smartphone", price: 25000 },
  { id: 3, name: "Headphones", price: 2000 },
  { id: 4, name: "Keyboard", price: 1200 },
  { id: 5, name: "Mouse", price: 800 },
];
// return all product whose price is greater tha or equal to 10000
function filterProduct(products) 
{
    const result=products.filter((ele)=>
    {
        return ele.price  >10000;
    })
    return result
}

console.log(filterProduct(products));
