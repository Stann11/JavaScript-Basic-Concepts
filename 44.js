//Function

function Happybirthday(){
    console.log("Happy Birthday to you........");
}
Happybirthday();

function twoplusfour(){
    console.log(2+4);
}
twoplusfour();

function value(number1,number2){
    return number1+number2;
}
console.log(value(1,2));

function even(num1){
    if(num1%2===0){
        return true;
    }else{ 
        return false;
    }
}
console.log(even(2));

function find(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return true;
        }
    }
    return false;
}
const array1=[1,2,3,4,5];
console.log(find(array1,5));