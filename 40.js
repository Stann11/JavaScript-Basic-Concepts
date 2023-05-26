// Spread operator in object 

const obj1={
    key1:"Value1",
    key2:"Value2"
};

const obj2={
    key3:"Value3",
    key4:"Value4",
    key1:"Hello"
};

console.log(obj1);
console.log(obj2);
const newObject={...obj1,...obj2,key21:"Value21"}; // When the other object has same value then the value will be overrideen by the other
console.log(newObject);
