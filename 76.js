//Create a function to create a object and return it.

function createUser(firstname,lastname,age,address){
    const user={};
    user.firstname=firstname;
    user.lastname=lastname;
    user.age=age;
    user.address=address;
    user.about=function(){
        console.log(this.firstname, this.age);
    }
    user.is18= function(){
        console.log(age >=18);
    }
    return user;
}
const a = createUser("Satnam","Sandhu",20,"Gotri");
a.about();
a.is18();