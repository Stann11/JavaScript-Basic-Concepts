//Params Destructuring

const person={
    name:"Satnam",
    gender:"Male",
    age:20
};
function getData({name,gender,age}){ //Object passed is getting destructured
    console.log(`My name is ${name}. My age is ${age}. I am ${gender}.`);
}
getData(person);