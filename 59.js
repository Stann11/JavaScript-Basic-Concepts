//Reduce Method

const arr1=[1,2,3,4,5];

const reducednumber=arr1.reduce((accumulator, currentvalue)=>{
    return accumulator+currentvalue;
},100);
console.log(reducednumber);

// accumulator , currentValue,  return 
// 1               2              3 
// 3               3              6
// 6               4              10
// 10              5              15
// 15              10             25

const users = [
    {name:"Satnam", age:20},
    {name:"Vivek", age:21},
    {name:"Yash", age:22},
    {name:"Dhyey", age:23}
]

const total=users.reduce((accumulator,currentvalue)=>{
    return accumulator+currentvalue.age;
},0);
console.log(total);