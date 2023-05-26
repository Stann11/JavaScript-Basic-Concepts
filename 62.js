//Every method
//Will return boolean value if all the elements in the array satisfy the condition of the arrow function

const num1=[2,4,6,8,10];

const even = num1.every((number1)=>number1%2===0);
console.log(even);

const product=[
    {id:1,name:"TV", price:200},
    {id:2,name:"Phone",price:500},
    {id:3,name:"Grinder",price:300}
]
const ok = product.every((n)=>n.price<3000);
console.log(ok);