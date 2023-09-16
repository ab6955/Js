const mySym=Symbol("key1")

const myobj = {
    0: 1223456,
    1: 1111,
    "name": "Abdullah",
    "Full Name": "Abdullah Ansari",
    [mySym]:"symbol1",
    age: 20,
    roll_no: 45,
    location: "Mumbai",
    isLoggedIn: true,
    email: "ansari@gmail.com",
    lastLogin:["Monday","Tuesday"]
}
// . and [] are two ways to access objects.

console.log(myobj["email"]);
console.log(myobj[1]);
console.log(myobj["Full Name"]);
console.log(myobj["roll_no"]);


console.log(typeof myobj[mySym]);
console.log(myobj[mySym]);  //Symbol does not need "" to access

myobj.email="abdullah@chatgpt.com"
console.log(myobj["email"]);


// Object.freeze(myobj)


myobj.email="abdullah@mivrosoft.com"
console.log(myobj);

myobj.greeting=function(){
    console.log("Hello Akhirah");
}

console.log(myobj.greeting());

myobj.greetingTwo=function(){
    console.log(`This is My Man name is ${this["Full Name"]}`);
}

console.log(myobj.greetingTwo());