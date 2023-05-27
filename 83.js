//New keyword example

function createUser(firstname,lastname,age,address){
    user.firstname=firstname;
    user.lastname=lastname;
    user.age=age;
    user.address=address;
    return user;
}
createUser.prototype.about=function(){
    return `${this.firstname}  , ${this.age}`;
}
createUser.prototype.is18=function(){
    return this.age>=18;
}
createUser.prototype.sing=function(){
    return "sdfsdfsdfsdfsdfsd";
}
const a = new createUser("Satnam","Sandhu",20,"Gotri"); //change
console.log(a);
console.log(a.about());
console.log(a.is18());
console.log(a.sing());