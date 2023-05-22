//String Operations 
let firstname="       Satnam      ";

console.log(firstname.length);

console.log(firstname.trim().length); 
// Trim remove the front and the end whitespace from the string

console.log(firstname.toUpperCase().trim());
 //toUpperCase turns the characters to the upper case

console.log(firstname.toLowerCase().trim());
 //toLowerCase turns the characters to the lower case

console.log(firstname.trim().slice(0,3)); 
// slice give the string from (start index, end index) last charater is not included so you will get the sting from the start to end-1 index.