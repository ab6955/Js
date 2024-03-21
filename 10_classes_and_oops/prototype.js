let myName = "Abdullah    ";
let mychannel = "chai     ";
// console.log(myName.length);
// console.log(mychannel.trim().length);

let myHero = ["Thor", "Spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.abdullah = function () {
  console.log(`Abdullah is present in every object`);
};

Array.prototype.heyAbdullah = function () {
  console.log(`Abdullah says Hello`);
};

// heroPower.abdullah()
// myHero.abdullah();
// myHero.heyAbdullah()
// heroPower.heyAbdullah()

// Inheritance

const user = {
  name: "chai",
  email: "chai@google.com",
};
const teacher = {
  makeVideo: true,
};
const teacherSupport = {
  isAvailable: false,
};
const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: teacherSupport, // TAsupport got all properties of teachersupport.
};

teacher.__proto__ = user; // teacher got all properties of user.
// Modern syntax for __proto__ is
Object.setPrototypeOf(teacherSupport, teacher); // teacherSupport got all properties of teacher.

// console.log(teacher.email);
// console.log(TASupport.isAvailable);
// console.log(teacherSupport.makeVideo);

// Goal

const username = "chaiAurCode    ";
// console.log(username);
console.log(username.length);

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`The actual length of string is ${this.trim().length}`);
};
username.trueLength();

let str2 = "         Abdullah Ansari      ";
console.log(`str2 length is ${str2.length}`);

str2.trueLength();

"ansari".trueLength(); // Here, Directly passing string instead of using variables( simple re (: )).
"I am a software engineer".trueLength();
