//Block vs Function scope

//let and const are block scope
//var is function scoped 

{
    let name = "Satnam";
    console.log(name);
}
// console.log(name);    error 

{
    var age =20;
    console.log(age);
}
console.log(age);