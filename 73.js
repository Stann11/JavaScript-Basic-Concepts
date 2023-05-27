//Call || Apply || Bind 

//Call 

const user1={
    name:"Satnam",
    age:20,
    about: function(hobby , music){
        console.log(this.name,  this.age,hobby,music);
    }
}
const user2={
    name:"Rahul",
    age:21
}
user1.about.call(user2, "Cricket", "Hard Rock");

//apply
user1.about.apply(user2, ["Cricket", "Hard Rock"]);

//bind
const a = user1.about.bind(user2, "Cricket", "Hard Rock");
a();