let name="Abdullah"
let age=20

// String interpolation..

// console.log(`Hello my name is ${name} and I am ${age} years old.`);

const gameName=new String("Abdullah")  //Another method to declare string.Here string treated as Object. 
// console.log(typeof gameName);

// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
// console.log(name.indexOf('u'));
// console.log(gameName.charAt(3));

// console.log(gameName.length);
const newString=gameName.substring(0,3)  // no negative value can be passed.
// console.log(newString);

const anotherString=gameName.slice(-6,4)  // negative value can be pass in slice method.
// console.log(anotherString);

let name1="    .abdullah.  /"
// console.log(name1);
// console.log(name1.trim());   // extra spaced remove from string using trim()..
// console.log(name1.trimStart());
// console.log(name1.trimEnd());

let URL="https://abdullah.com/abdullah%100ansari"

// console.log(URL.replace("%100","_"));


// console.log(gameName.includes('a'));



const name2="Abdullah ansari 1234"
// console.log(name2.split(" "));
// console.log(name2.split("",`4));


// Visit 
// https://abdullahimran.medium.com/14-most-useful-javascript-string-methods-1a10f6be0f4d

const str="My name is Abdullah ansari and I am an ansari"
// console.log(str.length);
// console.log(str.indexOf("ansari",40));  // -1 means not found.

const dogName="Your dog is not same as his dog!";
// console.log(dogName.lastIndexOf("dog",25));
// console.log(dogName.replace("his","her"))
// console.log(dogName.slice(-15,-1));
console.log(dogName.toUpperCase());
console.log(dogName.toLowerCase());
console.log(dogName.startsWith("Your"));
console.log(dogName.endsWith("!"));