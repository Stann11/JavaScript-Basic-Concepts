// Super Keyword

class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    isEating(){
        return "The animal is eating";
    }
    isYoung(){
        return this.age<18;
    }
    about(){
        return `The name of the dog is ${this.name} and age is ${this.age}`;
    }
}
class Dog extends Animal{
    constructor(name,age,speed){
        super(name,age);
        this.speed=speed;
    }
    isEating(){
        return "NEW : The animal is eating";
    }
    run(){
        console.log(`The dog can run ${this.speed} KM/Hrs`);
    }

}
const D1 = new Dog("Shiro", 6,45);
console.log(D1.isEating());
console.log(D1.isYoung());
console.log(D1.about());
D1.run();