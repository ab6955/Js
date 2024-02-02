const mySym=Symbol("Mohammad")

const user1={
    name:"Abdullah",
    "fullName":"Abdullah Ansari",
    [mySym]:"Mohammad",
    age:20,
    div:"E",
    email:"ansariabd62@gmail.com",
    is12passed:true
}
// console.log(user1.name);
// console.log(user1["name"]);
// console.log(user1["fullName"]);
// console.log(user1[mySym]);
// Object.freeze(user1);

user1.greeting=function(){
    console.log("hello world");
}
console.log(user1.greeting());

user1.greeting2=function(){
    console.log(`Hello ${this.fullName}`);
}
console.log(user1.greeting2());