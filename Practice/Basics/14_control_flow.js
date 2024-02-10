if (0) {
    console.log(2);
}

// if (3 !== "3") {
//     console.log("Executed");
// }
// const temperature = 40
// if (temperature < 50) {
//     console.log(`Temperature is less than 50`);
// }
// else{
//     console.log(`Temperature is greater than 50`);
// }


// const balance=1000
// // if(balance>300) console.log("PASS1"),console.log(("PASS2"));  // Very unprofessional , dont use this syntax.


// if(balance<500){
//     console.log(`Balance is greater than 500 `);

// }
// else if(balance<700){
// console.log(`Balance is greater than 700`);

// }
// else if(balance<900){
//     console.log("Balance is greater than 900");
// }
// else{
//     console.log("Balancce is equal to 1000");
// }


// const isLoggedIn=true
// const haveDebitCard=true
// const loggedInFromGoogle=false
// const loggedInFromEmail=true

// if(isLoggedIn && haveDebitCard){
//     console.log("You can apply");
// }
// else{
//     console.log("You cannot apply");
// }


// if(loggedInFromGoogle || loggedInFromEmail){
//     console.log("You Can Apply");

// }
// else{
//     console.log("You cannot Apply");
// }


// const month = 2
// const month="march"
const month = true

// switch (month) {
//     case 1:
//         console.log("Jan");
//         break;

//     case 2:
//         console.log("feb");
//         break;

//     case "march":
//         console.log("March");
//         break;

//     case true:
//         console.log("April");
//         break;

//     case 5:
//         console.log("may");
//         break;

//     case 6:
//         console.log("June");
//         break;

//     case 7:
//         console.log("July");
//         break;

//     default:
//         console.log("Ramadan");
//         break;
// }


// ************** IMPORTANT  **************

// FALSY values
// false , 0 , -0 , "" , null , undefined , Nan , BigInt 0n

// Truthy value
// true , "0" , "false", " " , [] , {} , function(){}

const userEmail = "abd@gmail.in";
if (userEmail) {
    console.log("Got Email");
} else {
    console.log("DID not get email");
}


const emptyArr = []
if (emptyArr.length === 0) {
    console.log("Array is Empty");
} else {
    console.log(emptyArr.length);
}


const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log(`Object is Empty`);
}


//  Nullish Coalescing Operator (??): It is used so that u dont get null or undefined value.(simple)

let val = 10
val = 15 ?? 20
val = null ?? 30
val = undefined ?? 40
val=null ?? undefined ?? 50 ?? 60  ?? 70
console.log(val);

// Ternary operator

// condition ? true : false

const iceCreamPrice=80

iceCreamPrice<100?console.log("Less than 80") : console.log("more than 80");