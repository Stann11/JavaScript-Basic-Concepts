// Same example but with memory save 

//Create a function to create a object and return it.

const isMethod={
    about:function(){
        return `${this.firstname}  , ${this.age}`;
    },
    is18:function(){
        return this.age>=18;
    },
    sing:function(){
        return "sdfsdfsdfsdfsdfsd";
    }

}
function createUser(firstname,lastname,age,address){
    const user={};
    user.firstname=firstname;
    user.lastname=lastname;
    user.age=age;
    user.address=address;
    user.about=isMethod.about;
    user.is18= isMethod.is18;
    user.sing=isMethod.sing;
    return user;
}
const a = createUser("Satnam","Sandhu",20,"Gotri");
console.log(a);
console.log(a.about());
console.log(a.is18());
console.log(a.sing());