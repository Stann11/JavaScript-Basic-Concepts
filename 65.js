//Splice method
//start, delete, insert
//give the deleted itme in array so the element can be used again if needed
const array1=["item1","item2","item3"];

//delete
array1.splice(1,1);
console.log(array1);

//insert
array1.splice(1,0,"Hello");
console.log(array1);

//insert and delete together
array1.splice(1,1,"K");
console.log(array1);