// Iterate object uses for in loop

const person={name:"Satnam",age:20, hobbies:["music","cricket"]}; 

for(let key in person){
    console.log(person[key]);
}

console.log(Object.keys(person)); 