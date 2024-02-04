// singleton.
// object.create

// object literals.

const mySym = Symbol("Mohammad")

const user1 = {
    name: "Abdullah",
    "fullName": "Abdullah Ansari",
    [mySym]: "Mohammad",
    age: 20,
    div: "E",
    email: "ansariabd62@gmail.com",
    is12passed: true
}
console.log(user1.name);
console.log(user1["name"]);
console.log(user1["fullName"]);
console.log(user1[mySym]);
Object.freeze(user1);

user1.greeting = function () {
    console.log(`hello world`);
}
// console.log(user1.greeting());


user1.greeting2 = function () {
    console.log(`Hello ${this.fullName}`);
}
// console.log(user1.greeting2());







const facebook = new Object() // this object is known as singleton.
// const facebook={} // this object is known as non-singleton.

// facebook["Name"]="Abdullah"  // this and below one are same. 
facebook.Name = "Abdullah"
facebook.id = "1234abc"
facebook.email = "ansariabd62@gmail.com"
facebook.year = 4

// console.log(facebook);


const user2 = {
    email: "ansariabd52@gmail.com",
    name: {
        userFullName: {
            firstName: "Abdullah",
            lastName: "Ansari"
        }
    }
}

// console.log(user2.email,user2.name.userFullName.firstName);



const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj3 = { 5: "a", 5: "b" }

// const obj4=Object.assign({},obj1,obj2,obj3)  //Here {} acted as target while obj1,2,3 all are acted as source(It is more reliable).

const obj4 = { ...obj1, ...obj2, ...obj3 }

// console.log(obj4);

const array1 = [
    {
        name: "Abdullah",
        id: "123abs"
    },
    {
        name: "ansari",
        id: "456abs"
    },
    {
        name: "essa",
        id: "789abs"
    }
]

console.log(array1[0]);
console.log(array1[1].name);
console.log(array1[2].id);


console.log(Object.keys(array1));
console.log(Object.values(array1));
console.log(Object.keys(user1))  //return keys in arrays
console.log(Object.values(user1));  //return values in arrays
console.log(Object.entries(user1));
