//Array methods
//ForEach method(returns single value)

const arr1 = [4,1,2,6];

arr1.forEach(function(number,index){
    console.log(`The number is ${number*2} and the index is ${index}`);
});

const users = [
    {name:"Satnam", age:20},
    {name:"Vivek", age:21},
    {name:"Yash", age:22},
    {name:"Dhyey", age:23}
]

users.forEach(function({name:a,age:b},index){
    console.log(`The name is ${a} and it is stored at ${index} index`);
})