//Primitive and Reference data type

//Primitive
let num1=10;
let num2=num1;
console.log("Before");
console.log(num1);
console.log(num2);
num1++;
console.log("After");
console.log(num1);
console.log(num2);

//Reference
let arr1=["Apple", "Banana"];
let arr2=arr1;
console.log("Before");
console.log(arr1);
console.log(arr2);
console.log("After");
arr1.push("Grapes");
console.log(arr1);
console.log(arr2);
