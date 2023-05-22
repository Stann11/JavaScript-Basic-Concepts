// Undefined || Null || BigInt

let firstname;
console.log(typeof firstname); //undefined

//Let and var can be left undefined but in case of const it can not be left undefined

firstname=null;
console.log(typeof firstname); //object : this is a bug/error

console.log(Number.MAX_SAFE_INTEGER); //Maximum nubmer that can be stored in javascript

let number1=BigInt(234234333242342423423423423); //Type conversion
let number2=297n;  //Direct declaration
console.log(number1);
console.log(number2);
console.log(number1 + number2); //Addition of bigint