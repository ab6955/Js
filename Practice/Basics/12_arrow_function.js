const user = {
    username: "Abdullah",
    price: 999,

    welcome: function () {
        console.log(`Welcome ${this.username}`);
        console.log(this);
    }
}
// user.welcome();
// user.username="Ansari"
// user.welcome()

// console.log(this);

// function chai() {
//     const name = "Abdullah"
//     console.log(this);
//     console.log(this.name);

// }
// chai()   // this is only used in objexts only.


const chai = () => {
    const name = "Ansari"
    console.log(this);
    console.log(this.name);

}
// chai()


// const addTwo=(val1,val2)=>{
//     return val1+val2;
// }

// or

const addTwo = (val1, val2) => (val1 + val2 )  //if returning in same line then no need to explicitly write return keyword.
// console.log(addTwo(3, 2))

