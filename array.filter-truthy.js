function truthy(values) {
  const result = values.filter(function (ele) {
    return Boolean(ele); // use only this because don't allow js convert the values imlicitly and you do exlicitly
    // or  return Boolean(ele)==true;
    // or return ele; js convert the values exlictly
    // or even with if condition and return ele will also work
    //if(ele)
    //{
    //    return ele;

    //}
  });
  return result;
}

console.log(truthy([false, true, 0, 1, undefined, NaN, "dct", "", [], [10]]));
