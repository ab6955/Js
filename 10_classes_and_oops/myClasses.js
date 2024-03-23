// ES6

// class user {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }
//   encryPassword() {
//     return `${this.password}abc`
//   }
//   changeUserName(){
//     return `${this.username.toUpperCase()}`
//   }
// }

// const chai=new user("CHai","chai@google.com","123")
// console.log(chai);
// console.log(chai.encryPassword());
// console.log(chai.changeUserName());

// Behind the scene.

function user(username,email,password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

user.prototype.encryPassword = function () {
  return `${this.password}abc`;
};

user.prototype.changeUserName = function () {
  return `${this.username.toUpperCase()}`;
};

const tea=new user("tea","chai@google.com","123")
console.log(tea);
console.log(tea.encryPassword());
console.log(tea.changeUserName());