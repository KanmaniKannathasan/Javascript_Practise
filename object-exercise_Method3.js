 // this
 function checkProp(obj,prop)
{
if ((Object.keys(obj)).includes(prop)) 
  {
  return true;
} 
else
{
  return  false;
}
}


console.log(checkProp({ a: 1, b: 2 }, 'a')); //true
console.log(checkProp({a:1,b:2},'z')); //false

