// Object.create method 

// const obj1={ 
//     key1:"Value1",
//     key2:"Value2"
// };
// const obj2=Object.create(obj1);
// obj2.key3="Value3";
// console.log(obj2.key1);
// console.log(obj2.key2);
// console.log(obj2.key3);
// console.log(obj2);
// console.log(obj2.__proto__);

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
    const user=Object.create(isMethod);
    user.firstname=firstname;
    user.lastname=lastname;
    user.age=age;
    user.address=address;
    return user;
}
const a = createUser("Satnam","Sandhu",20,"Gotri");
console.log(a);
console.log(a.about());
console.log(a.is18());
console.log(a.sing());