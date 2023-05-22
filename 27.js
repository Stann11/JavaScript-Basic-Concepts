//Array Manipulation Methods

let fruits=["Apple", "Mango", "Grapes"];
console.log(fruits);

fruits.push("Banana");  //Adds element in back of array
console.log(fruits);

console.log(fruits.pop());  //Removes element from back of array and gives us
console.log(fruits);

fruits.unshift("Banana");  //Adds element infront of the array
console.log(fruits);

console.log(fruits.shift());  //Removes element from front of the array and gives us
console.log(fruits);

//Push and pop are faster compared to shift and unshift