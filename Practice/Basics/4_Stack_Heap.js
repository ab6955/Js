//  Primitive Data types are store in Stack Memory and Non-primitive(reference) data types are store in Heap memory.

let myName="Abdullah"
let myNewName=myName
myNewName="Ansari"
// console.log(myName);
// console.log(myNewName);

let user1={
    email:"ansariabd62@gmail.com",
    age:20
}
let user2=user1
user2.email="Abdullah@gmail.com"
console.log(user1.email);
console.log(user2.email);