// Callback Function

function add1(){
    console.log("Inside function add1");
}
function add2(a){
    console.log("Inside function add2");
    a();
}
add2(add1);