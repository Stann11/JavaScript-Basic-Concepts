//Find method

const arr1=["Apple","Banana","Cat","Dog"]; 

const founditem = arr1.find((str1)=>str1==="Cat");
console.log(founditem);

const users = [
    {id:1,name:"Satnam", age:20},
    {id:2,name:"Vivek", age:21},
    {id:3,name:"Yash", age:22},
    {id:4,name:"Dhyey", age:23}
]
const getUser = users.find((id)=>id.id===1);
console.log(getUser.name);