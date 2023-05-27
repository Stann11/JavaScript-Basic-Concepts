//In JavaScript the function works as function and also works as a object
//This object can be called as free space which is known as prototype

function hello(){
    console.log("Hello world");
}
console.log(hello.name);
hello.howareyou ="How are you ?";
console.log(hello.howareyou);

console.log(hello.prototype); 

//only function provide prototype property

hello.prototype.age=20;
hello.prototype.address="abc";
console.log(hello.prototype); 