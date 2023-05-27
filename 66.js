// Iterables
// The things to which we can apply for of loop to iterate them
// Strings and arrays are iterable 

const str1="Satnam";
for(let c of str1){
    console.log(c);
}

const arr1=[1,2,3,4,5];
for(let f of arr1){
    console.log(f);
}

// Objects are not iterables and will give error when iterated
const obj1=[
    {id:1,name:"Rahul"},
    {id:2,name:"Gaurav"},
    {id:3,name:"Hitarth"}
];
const obj2={id:3,name:"Hitarth"}
for(let b of obj1){
    console.log(b);
}

//Array like object 
// Things those who have length property 
// Things which can be accessed by indexing 
// Eg: String 

const name="Satnam";
console.log(name.length);
console.log(name[2]);