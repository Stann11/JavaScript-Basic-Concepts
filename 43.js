//Nested destructuring

const users=[
    {user:1,name:"Satnam",gender:"Male"},
    {user:2,name:"Vivek",gender:"Male"},
    {user:3,name:"Yash",gender:"Male"}
]
const [{name},,{gender}]=users;
console.log(name);
console.log(gender);