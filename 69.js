//Clone using Object.assign 

const obj={
    key1:"value1",
    key2:"value2"
};
const obj1=obj;
obj.key3="value3";
console.log(obj);
console.log(obj1);

//Here both the array point at the same memory address in the heap memory 
//So we need to clone the object 

//Method 1 (Spread operator)

const obj2={...obj};
console.log(obj2);

//Method 2 

const obj3= Object.assign({},obj);
console.log(obj3);