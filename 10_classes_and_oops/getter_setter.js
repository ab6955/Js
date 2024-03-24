class user {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  get email(){
    return this._email.toUpperCase()
  }
  set email(value){
    this._email=value    
  }
  get password() {
    // return `${this._password}abd`
    return `${this._password}abd`.toUpperCase()
  }
  set password(value) {
    this._password=value
  }
}

const Abdullah = new user("Abdullah@gmail.com", "123abc");
console.log(Abdullah.email);
console.log(Abdullah.password);