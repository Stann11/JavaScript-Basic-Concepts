// Difference between dot and bracket notation

//dot notation 

// const person={name:"Satnam",age:20, hobbies:["music","cricket"]};
// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.hobbies);
// console.log(person.hobbies[0]);
// console.log(person.hobbies[1]);

// person.gender="male";
// console.log(person);

//Bracket notation

const person={name:"Satnam",age:20, "hobbies":["music","cricket"]};
console.log(person);
console.log(person["name"]);
console.log(person["age"]);
console.log(person["hobbies"]);

const key="gender";
person[key]="Male";
console.log(person);