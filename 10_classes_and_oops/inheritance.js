class user {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(this.username);
  }
}
const chai= new user("Abdul")
// console.log(chai); 

class Teacher extends user {
  constructor(username, email, password) {
    // user.call(this, username);
    super(username); // alternate for call (above code).
    this.email = email;
    this.password = password;
    // console.log(this.username);
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const Tea = new Teacher("Tea", "Tea@gmail.com", "456");
// console.log(chai);
// Tea.addCourse();
// Tea.logMe()
// Tea.logMe()

console.log(chai instanceof user);
console.log(Tea instanceof Teacher);
console.log(Tea instanceof user);