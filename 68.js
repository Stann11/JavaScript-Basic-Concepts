//Map 
//It is iterable 
//Stores data in old fashion 
//Stores key value pair (like object)
//Duplicate keys are not allowed 

const abc = new Map();
abc.set('firstname', 'Satnam');
abc.set('age',20);
abc.set(1,'one');
console.log(abc.get('firstname'));
console.log(abc.keys());
for(let d of abc.keys()){
    console.log(`The value to key ${d} is ${abc.get(d)}`);
}