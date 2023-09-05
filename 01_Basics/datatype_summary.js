//  In js datatypes can be classified into 2 types

// 1) Primitive
// 2) Non-primitive (Reference)




// #########  Primitive Data types   #####

// 1) String 
const userName = "Hitesh"

//  2) Number
const score = 24
const scoreValue = 34.32

//  3) Boolean
const isLoggedIn = true

//  4) null
const temperature = null

// 5) undefined
let userEmail;

// 6) symbol
const id = Symbol('45677')
const userId = Symbol('45677')

// console.log(id != userId);

// 7) BigInt
const bigNumber = 93856239572357




// #########  Non-Primitive Data types   #####

// 1) Array[]
const heros = ["Captain America", "Iron Man", "Thor", "Hulk"];

// 2) Object{}
const myobj={
    Name: "Abdullah",
    age: 21,
}

// 3) Function

const myfunction = function () {
    console.log("Kaise ho");
}


// console.log(typeof userName);
// console.log(typeof score);
// console.log(typeof scoreValue);
// console.log(typeof isLoggedIn);
// console.log(typeof temperature);
// console.log(typeof userEmail);
// console.log(typeof userId);
// console.log(typeof bigNumber);

console.log(typeof heros);
console.log(typeof myobj);
console.log(typeof myfunction);







//  null => object
//  object => object
//  Array => function
//  function => function object
