//  All primitive data types are stored in Stack Memory.
//  All non-primitive data types are stored in Heap Memory.

// Stack exmample
// const userName1="abdullah"
// const userName2=userName1
// console.log(userName1);
// console.log(userName2);

// Heap examples
let user1={
    email:"example@gmail.com",
    phone:2244543
}

let user2=user1

console.log(user2.email);
console.log(user2.phone);


user2.email="ansari@gmail.com"
user2.phone=1234566


console.log(user1.email);
console.log(user1.phone);





