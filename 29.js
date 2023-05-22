//Clone and concatinate array

let arr1=["Apple", "Banana", "Grapes"];
let arr2=arr1;
console.log(arr1===arr2);

let arr3=arr1.slice(0); //slice method
console.log(arr3);

let arr4=[].concat(arr1); //Concatinate array with empty array
console.log(arr4);

let arr5=[...arr1]; //Spread method 
console.log(arr5);

let arr6=[...arr1].concat(["Jamun"]);
console.log(arr6);

let arr7=[...arr1,"item1","item2"]; //Spread method 
console.log(arr7);

let dummy=["item1","item2"];
let arr8=[...arr1,...dummy];
console.log(arr8);

//According to performance the slice method is faster compare to other methods