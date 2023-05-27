// Sets 
// Store data
// Set have its own methods
// No index based access
// Order is not guaranteed
// Unique items only (no duplications) // If there are duplicates then the method will discard the excess

const num = new Set([1,2,3,4,5]);
console.log(num);

const arr1=[12,13];
const add = new Set();
add.add(1);
add.add(2);
add.add(arr1);
add.add([1,2]); //This will be added as it has appered first time 
add.add([1,2]); //This will also be added as it has different memory address in the computer memory
console.log(add);

console.log(add.has(arr1));
let leng = 0;
for(let item of add){
    leng++;
    console.log(item);
}
console.log(`The length of the set is ${leng}`);

// You can not use length property on the set as it will result in undefined 
// To find lenght use loop
 