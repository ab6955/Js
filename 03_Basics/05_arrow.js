// Using this in objects

const user = {

    username: "Abdullah",
    price: 1200,
    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);   
    }
}
// console.log(user.username)
// console.log(user.price)
// user.welcomeMessage() 
// user.username="Ansari"
// user.welcomeMessage()
// console.log(this);



// Using this in Functions

// function chai() {
//     username: "Abdullah",
//     console.log(this);
// }

// const chai=function(){
//     username: "Abdullah",
// console.log(this);
// }


const chai = () => {
    username: "Abdullah",
        console.log(this.username);
}

// chai()


// const addTwo=(num1, num2) => {
//     return (num1 + num2);
// }
//                    or    
// const addTwo=(num1, num2) =>  (num1 + num2);
// returning object be like
const addTwo=(num1, num2) => ({username:"Abdullah"})

console.log(addTwo(3,3))
