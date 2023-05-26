// Rest Parameters 

function myFunc(a,b,...c){
    console.log(a);
    console.log(b);
    console.log(c);
    let sum = 0;
    for(let num of c){
        sum+=num;
    }
    console.log(sum);
}
myFunc(1,2,3,4,5,6,7);