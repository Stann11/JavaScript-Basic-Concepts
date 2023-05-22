// break and continue keyword

for(let i =1;i<=10;i++){
    if(i==4){
        break;  //will send the compiler to 9th line when condition is true
    }
    console.log(i);
}

for(let j=1;j<=10;j++){
    if(j==4){
        continue; // will send the compiler to 10th line when the condition is true and will not exectue the line after that
    }
    console.log(j);
}