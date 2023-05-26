// Map method(return array )

const arr1=[4,3,2,1,9];

// const square = function(num){
//     return num*num;
// }
// const squarenumber = arr1.map(square);
// console.log(squarenumber);

// const squarenumber = arr1.map((number) => {
//     return number*number;
// });
// console.log(squarenumber);

const users = [
    {name:"Satnam", age:20},
    {name:"Vivek", age:21},
    {name:"Yash", age:22},
    {name:"Dhyey", age:23}
]

const name= users.map(
    (number,index)=>{
        console.log(index);
        return number.name;
    }
)
console.log(name);