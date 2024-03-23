class user {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`${this.username}`);
  }
  static createId() {
    return `123`;
  }
}
const Abdullah = new user("Abdullah");
// console.log(Abdullah.createId())

class Teacher extends user {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}
const iphone = new Teacher("Abdullah", "ansariabd62@gmail.com");
// iphone.logMe()
console.log(iphone.createId());
