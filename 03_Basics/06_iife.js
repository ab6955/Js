// Immediate Involked Function Expresion (IIFE)

// We are using iife to remove global variables pollution.

(function code(){
    // named iife
    console.log(`Hii`);
})();
// ; is manditory as it terminating the function.

(()=>{
    // unnamed iife
    console.log(`Kaise ho`);
})();


((name)=>{
    console.log(`My name is ${name}`);
})("Abdullah")