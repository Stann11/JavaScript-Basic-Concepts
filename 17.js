// Nested if else 

let winningnumber = 19;
let userguess= Number(prompt("Guess a number"));

//IF ELSE LADDER 

// if (userguess === winningnumber){
//     console.log("You have won!");
// }
// else if(userguess>winningnumber){
//     console.log("Too high guess");
// }
// else if(userguess<winningnumber){
//     console.log("Too low guess");
// }
// else{
//     console.log("Invalid input")
// }

if (userguess === winningnumber){
    console.log("You have won!");
}
else{
    if(userguess>winningnumber){
        console.log("Too high guess");
    }
    else if(userguess<winningnumber){
        console.log("Too low guess");
    }
    else{
        console.log("Invalid input");
    }
}
