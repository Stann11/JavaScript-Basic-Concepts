// Default Parameters

// function add(a,b){
//     console.log(a+b);
// }
// add(1,2);

//Method 1

// function add(a,b){
//     if(b===undefined){
//         b=0;
//     }
//     console.log(a+b);
// }
// add(1);


function add(a,b=0){  //Default parameter set for b 
    console.log(a+b);
}
add(10);