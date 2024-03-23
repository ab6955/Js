function checkUser(username) {
  this.username = username;
  console.log("Called");
}

function createUser(username, email, password) {
  checkUser.call(this,username);
  this.email = email;
  this.password = password;
}
// const user1=new createUser("chai","ansariabd@gmail.com","123")
// console.log(user1);
console.log(new createUser("chai", "ansariabd@gmail.com", "123")); //another syntax for printing.