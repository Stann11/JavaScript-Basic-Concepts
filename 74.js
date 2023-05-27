//Arrow Function behaviour
//This method will not work with arrow function as arrow function takes input from the surrounding 

const person={
    name:"Satnam",
    age:"20",
    about:()=>{
        console.log(`The persons name is ${this.name} and persons age is ${this.age}`);
        console.log(this); //This will be object 
    }
};
person.about();