//Class

class createUser{
    constructor(name,age,gender){
        this.gender=gender;
        this.age=age;
        this.name=name;
    }
    about(){
        return `${this.name}, ${this.age}`;
    }
    is18(){
        return this.age>=18;
    }
    sing(){
        return "lalalalalalala";
    }
}
const user1 = new createUser("Satnam",20,"Male");
console.log(user1.about());
console.log(user1.is18());
console.log(user1.sing());