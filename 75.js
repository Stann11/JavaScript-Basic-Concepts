//Short method

const person={
    name:"Satnam",
    age:"20",
    about(){
        console.log(`The persons name is ${this.name} and persons age is ${this.age}`);
        console.log(this); //This will be object 
    }
};
person.about();