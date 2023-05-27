//Getter and Setter method and static method 

class createUser{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    static fun1(){
        console.log("This is fun");
    }
    get nameage(){
        return `${this.name}, ${this.age}`;
    }
    set named(fullname){
        const [name,age]=fullname.split(" ");
        this.name=name;
        this.age=age;
    }
}
const person1 = new createUser("Satnam", 20);
console.log(person1.nameage);
person1.named="Mohit 10";
console.log(person1.nameage);
createUser.fun1();