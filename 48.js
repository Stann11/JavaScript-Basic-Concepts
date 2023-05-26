//Function inside function

const app = () =>{
    const hello = () =>{
        console.log("Hello World!");
    }
    const value = (num1,num2) =>{
        console.log(num1+num2);
    }
    hello();
    value(1,2);
}
app();