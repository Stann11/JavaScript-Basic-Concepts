//This or Window 
//They both are same and return the same things

console.log(this);
console.log(window);

function hello(){
    console.log("Hello World");
}
window.hello();