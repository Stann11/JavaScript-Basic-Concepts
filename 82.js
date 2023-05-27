//New Keyword
//Will create a new empty object 

function createUser(name,age){
    this.name=name;
    this.age=age;
}
createUser.prototype.about=function(){
    console.log(this.name,this.age);
}
const user1= new createUser("Satnam", 20);
user1.about();