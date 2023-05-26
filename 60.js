//Sort Method 

const arr1=[5,9,1200,400,3000];
arr1.sort((a,b)=>{
    return a-b;
});
console.log(arr1);

const website=[
    {id:1,name:"P1",price:2000},
    {id:2,name:"P2",price:7000},
    {id:3,name:"P3",price:4000},
    {id:4,name:"P4",price:1000},
    {id:5,name:"P5",price:6000}
]
const lowtohigh = website.slice(0).sort((a,b)=>{
    return a.price-b.price;
});
console.log(lowtohigh);

const hightolow = website.slice(0).sort((a,b)=>{
    return b.price-a.price;
});
console.log(hightolow);