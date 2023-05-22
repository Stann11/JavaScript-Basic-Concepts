// For loop in array 
let fruits=["Apple", "Banana", "Grapes", "Mango"];

//Method 1
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

//Method 2
for(let fruit of fruits){
    console.log(fruit);
}