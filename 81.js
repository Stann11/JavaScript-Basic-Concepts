//Use prototype

// const isMethod={
//     about:function(){
//         return `${this.firstname}  , ${this.age}`;
//     },
//     is18:function(){
//         return this.age>=18;
//     },
//     sing:function(){
//         return "sdfsdfsdfsdfsdfsd";
//     }

// }
function createUser(firstname,lastname,age,address){
    const user=Object.create(createUser.prototype);
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
const a = createUser("Satnam","Sandhu",20,"Gotri");
console.log(a);
console.log(a.about());
console.log(a.is18());
console.log(a.sing());