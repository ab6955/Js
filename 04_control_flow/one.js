// if
// const Temperature = 35;
// if (Temperature === 30) {
//     console.log("Very Hot");

// }
// else {
//     console.log("Not that Hot");
// }


// const score = 12;
// if (score > 100) {
//     const power = "Batman"
//     console.log(`I am ${power}`);
// }
// else {
//     console.log(`I am not a batman ${power}`)  // power is a scope variable i cannot be used outside {}
// }


const price = 150;
// if(price>100) console.log("price>100") , console.log("price < 100");  // Not a good practice , Non-readable

// if (price <= 50) {
//     console.log("Less than 50");

// }
// else if (price <= 100) {
//     console.log("Less than 100");
// }
// else if (price <= 150) {
//     console.log("Less than 150");
// }
// else {
//     console.log("Less than 300");
// }


// Conditional Statement
const userLoggedIn = true
const debitCard = true

if (userLoggedIn && debitCard) {
    console.log(`Welcome`);
}

const loginFromEmail=true
const loginFromGoogle=false

if(loginFromEmail || loginFromGoogle){
    console.log("Welcome again");
}