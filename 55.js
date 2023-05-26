// Function Returning a function 

function add1(num1,num2){
    return add2(num1,num2);
}
function add2(a,b){
    return a+b;
}
console.log(add1(1,2));

function myFunction(){
    function hello(){
        console.log("Hello!");
    }
    return hello;
}
const adios= myFunction();
adios();