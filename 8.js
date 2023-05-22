// Type conversion and Types of variables

//Data Types(Primitive data types) : string , number, booleans, undefined, null, bigint, symbol

let age = 11;
let name= "Satnam";
console.log(typeof age);  //number
console.log(typeof name); //string
console.log(typeof(age)); //number 

console.log(typeof (age+"")) //Trick to convert number to string add an empty string to the number
console.log(String(age)); //Type casting

let string1="34";
console.log(typeof string1); //string
console.log(typeof +string1); //Trick to convert string to number add + symbol in front
console.log(+string1); //number 
console.log(Number(string1)); //Type casting