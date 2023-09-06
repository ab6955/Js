const name = "Abdullah"
const repoCount = 43

console.log(name + repo);

console.log(`This is ${name} ansari and ${repoCount}`);

const gameName = new String("Abdullahcr Ansari")

console.log(gameName[9]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf("r"));

const string1 = gameName.substring(0, 5)
console.log(string1);

const string2 = gameName.slice(4)
// const string2 = gameName.slice(4, 9)
// const string2 = gameName.slice(-4)
// const string2 = gameName.slice(-6, -1)
console.log(string2);

//  trim method
const newStringOne = "    Abdullah    "
console.log(newStringOne);
console.log(newStringOne.trimStart());
console.log(newStringOne.trimEnd());
console.log(newStringOne.trim());

// index method
const sentence1 = "My name is Abdullah ansari"
index = 4
console.log(`The value of ${index} returns as ${sentence.at(index)}`);
index = -4
console.log(`The value of ${index} returns as ${sentence.at(index)}`);

// charAt()method  
// charAT() methos is used  for characters only while at() used for array also..
const sentence2 = "My name is Abdullah ansari"
index = 4
console.log(`The value of ${index} returns as ${sentence.at(index)}`);
index = -4
console.log(`The value of ${index} returns as ${sentence.at(index)}`);

// charCodeAt() method
const sentence3 = "My name is Abdullah ansari"
index = 3
console.log(`this is ${sentence.charCodeAt(index)} and ${sentence.at(index)}`);

// startswith() method
const str1 = "Abdullah is Engineer"
console.log(str1.startsWith("is"));

// split method
const string = "My name is Abdullah Ansari"
// const words=string.split(" ")
// console.log(words[4]);

const char = string.split("")
console.log(char[5]);

const none = string.split()
console.log(none);