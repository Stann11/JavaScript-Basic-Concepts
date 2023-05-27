//Method 
// Function inside object 

const person={
    name:"Satnam",
    age:"20",
    about:function(){
        console.log(`The persons name is ${this.name} and persons age is ${this.age}`);
        console.log(this); //This will be object 
    }
};
person.about();

function info(){
    console.log(`The persons name is ${this.name} and persons age is ${this.age}`);
}
const person1={
    name:"Stan",
    age:"18",
    about:info
};

const person2={
    name:"Vivek",
    age:"12",
    about:info
};

const person3={
    name:"Yash",
    age:"38",
    about:info
};
person1.about();
person2.about();
person3.about();