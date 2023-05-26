//lexical scope

function app(){
    const var1="Value1";
    function function2(){
        const var1="Hello"
        console.log(var1)
    }
    console.log(var1);
    function2();
}
app();

//In lexical scope the value that is readyly available in the function or in the parent function will be called and will be used.