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

console.log(gameName.length);
const newString=gameName.substring(0,3)  // no negative value can be passed.
console.log(newString);

const anotherString=gameName.slice(-6,4)  // negative value can be pass in slice method.
console.log(anotherString);

let name1="    abdullah  "
console.log(name1);
console.log(name1.trim());   // extra spaced remove from string using trim()..

let URL="https://abdullah.com/abdullah%100ansari"

console.log(URL.replace("%100","_"));


console.log(gameName.includes('a'));

// https://abdullahimran.medium.com/14-most-useful-javascript-string-methods-1a10f6be0f4d