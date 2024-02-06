function print() {
    console.log("Abdullah ansari");
}
// print()

// const print = function () {
//     console.log("Abdullah ansari");
// }


function addTwoNum(value1, value2) {
    return value1 + value2
}
// console.log(addTwoNum(2, 4));

// const addTwoNum = function(value1, value2) {
//     // console.log(value1+value2);
//     return value1+value2
// }

function printName(username) {
    return `${username} is a software engineer.`
}
// const name=printName("Abdullah")
// console.log(name);
// console.log(printName("Abdullah"));

function displayName(username = "Ansari") {
    // if(username===undefined)
    if (!username) {
        console.log("Please enter your correct name");
        return;
    }
    console.log(`${username} just loggedIn`);
}
// displayName("Abdullah")


function CartPrice(value1, value2, ...valuen) {
    return valuen;
}
// console.log(CartPrice(100,200,300,400,500));

const user = {
    username: "Abdullah",
    price: 999
}
function handleObject(anyobject) {
    return `My name is ${anyobject.username} and course price is ${anyobject.price}`
}
// console.log(handleObject(user));
// console.log(handleObject({
//     username:"Ansari",
//     price:1220
// }));


const arr=[100,150,200,250,300]

function handleArray(anyArray){
    return anyArray[2]
}
// console.log(handleArray(arr));
console.log(handleArray([100,150,200,250,300]));

