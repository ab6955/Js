// const tinderUser=new Object()

const tinderUser = {}   // Simply declare the object , nothing else.

tinderUser.name = "Abdullah_Ansari"
tinderUser.id = "123abcd"
tinderUser.password = "12345678"

// console.log(tinderUser);


const regularUser = {
    userId: "123",
    Name: {
        userName: {
            firstName: "Abdullah",
            lastName: "Ansari"
        }
    },
    emailId: {
        GoogleId: "ansari@google.com",
        MicrosoftId: "abdullah@microsoft.com"
    },
    rollNo: 45
}
// console.log(regularUser.Name.userName);
// console.log(regularUser.emailId.MicrosoftId);

const obj1 = { 1: "a", 2: "b", 3: "c" }
const obj2 = { 4: "d", 5: "e", 6: "f" }


// const obj3 = Object.assign({},obj1, obj2)  // {} is Target source while obj1 and obj2 are source.

const obj3={...obj1,...obj2}
// console.log(obj3);


console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser);
console.log(tinderUser.hasOwnProperty("name"));