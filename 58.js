//Filter method

const arr1=[1,2,3,4,5,6];
// const Even = function(number){
//     return number%2===0;
// }
// const evennumber= arr1.filter(Even);
// console.log(evennumber);

const evennumber=arr1.filter((number)=>{
    return number%2===0;
});
console.log(evennumber);