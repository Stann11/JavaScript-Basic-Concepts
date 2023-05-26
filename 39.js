// computed properties

const key1="obj1";
const key2="obj2";

const value1="Val1";
const value2="Val2";

//Method 1
const obj={};
obj[key1]=value1;
obj[key2]=value2;
console.log(obj);

//Method 2
const obj3={
    [key1]:value1,
    [key2]:value2
}
console.log(obj3);