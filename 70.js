//Optional Chaining 

const obj={
    name:"Satnam",
    address:{Street:"Gotri", Pincode:390021}
};
console.log(obj?.name);
console.log(obj?.address?.Street);