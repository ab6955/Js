// function sayMyName(){
//     console.log("Abdullah");
//     console.log("Ansari");
// }
// sayMyName()



function addTwoNumbers(number1, number2) {
    //    console.log( number1+number2);
    return number1 + number2
    // let result = number1 + number2

}
const result = addTwoNumbers(3, 5)
// console.log("Result is", result);



function loggedInMessage(username="Ansari") {
    // if(username===undefined){
    if (!username) {
        console.log("Please Enter username");
        return
    }
    return `${username} just Logged in`

}

// console.log(loggedInMessage("Abduallah"))
console.log(loggedInMessage())

