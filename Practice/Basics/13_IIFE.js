//  Due to pollution created by global scope's variable , we used this technique called IIFE which executes the function immediately to stop the pollution. 


function chai() {
    console.log(`Hello World`);
}
chai();


(function code() {
    // here code is named IIFE.
    console.log(`Hello Abdullah`);
})();

// code()   In IIFE ismply wrape the function body in () and then call function () in the same line like the above code.

(() => {
    console.log(`DB connected`);
})();

( (name)=>{
    console.log(`wecome ${name}`);
})("abcd123");