// function calculateCartPrice(...number){
//     return number
// }
// console.log(calculateCartPrice(3,4,5,56,3))


// passing object

const user = {
    username: "Abdullah",
    age: 20,
    price: 1999
}

function handleObject(anyobject) {
    console.log(`The name of user is ${anyobject.username} , age is ${anyobject.age} and price is ${anyobject.price} only`);
}

handleObject(user)
handleObject({
    username:"Ansari",
    age:19,
    price:1299
})

// passing Array

const NewArray=[10,20,30,40]

function returnArray(getArray){
    return getArray[1]
}
// console.log(returnArray(NewArray))
console.log(returnArray([12,13,14,15,16]));