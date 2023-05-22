//Array Destructuring

const MyArray = ["Value1", "Value2", "Value3", "Value4"]
let [var1,var2,...dummy]=MyArray;
console.log(var1);
console.log(var2);
console.log(dummy);