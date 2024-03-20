const user = {
  username: "Abdullah",
  loginCount: 8,
  signIn: true,

  getUserDetail: function () {
    // console.log("Got user detail from DB");
    // console.log(`username:${this.username}`);
    console.log(this);
  },
};
// console.log(user["username"]);
// console.log(user["getUserDetail"]()); // user.getUserDetail()
// console.log(this);

function User(name, age, isLoggedIn) {
  this.name = name;
  this.age = age;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`welcome ${this.name}`);
  };

  return this; // this will return if u don't use "new" keyword in line 23,24.
}

const userOne = new User("Abdullah", 45, true);
const userTwo = new User("Ansari", 21, false);
// console.log(userOne);
// console.log(userTwo);
console.log(userOne.constructor);
