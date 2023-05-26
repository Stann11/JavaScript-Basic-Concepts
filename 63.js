//Some method

const number = [1,3,5,8];

const isodd=number.some((n)=>n%2===0);
console.log(isodd);

const product=[
    {id:1,name:"TV", price:200},
    {id:2,name:"Phone",price:500},
    {id:3,name:"Grinder",price:300}
]
const isgreat=product.some((p)=>p.price>400);
console.log(isgreat);