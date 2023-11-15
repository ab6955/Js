const email = 9
if (email) {
    console.log("Got email");
} else {
    console.log("Do not get email");
}


// falsy value
// false , 0 , -0 , "" , BigInt 0n ,   null , undefined , Nan , undefined , Nan

// truthy value 
// true , "0" , "false" , " " , {} , []  , function(){}


const userEmail = []
if (userEmail.length === 0) {  // checking conditons for array
    console.log("Array is Empty");
}
else {
    console.log("Array is not empty");
}

const emptyObj={}
if(Object.keys(emptyObj).length===0){  // checking for objects
    console.log("Object is empty");
}
else{
    console.log("Object is not empty");
}



//  Nullish coalescing operator (??):    // very easy..
let val1

// val1=12 ?? 13
// val1=null ?? 14
val1=undefined ?? 12
console.log(val1);

// Ternary operator
const coffeePrice=10
coffeePrice>80 ? console.log("Greater than 80") : console.log("Less than 80");