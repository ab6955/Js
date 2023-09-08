// 1) at() method
const sentence = "I am Software Engineer"
index = 2
console.log(`My roll no is ${index} and character is stars with ${sentence.at(index)}`);
index = -4
console.log(`My roll no is ${index} and character is stars with ${sentence.at(index)}`);

// 2) charat() method
const sentence = "I am Software Engineer"
index = 5
console.log(`The character at ${index} is ${sentence.charAt(index)}`);

// 3) charCodeAt() method
const sentence = "I am Software Engineer"
index = 7
console.log(`The charCodeAt at ${sentence.charCodeAt(index)} == ${sentence.charAt(index)}`);

// 4) concat() method
const str1="Abdullah"
const str2="Ansari"
console.log(str1.concat(" ",str2));
console.log(str1.concat(" , ",str2));

// 5) enswith() method
const string1="Cats are the best!"
console.log(string1.endsWith("best!"));
console.log(string1.endsWith("best",17));

const string2="Is this a question?"
console.log(string2.endsWith("question?"));
console.log(string2.endsWith("question?",19));

const string3="Is this a question?"
console.log(string3.endsWith("this"));
console.log(string3.endsWith("this",7));

// 6) includes() method
const sentence = "I am Software Engineer"
word="I"
console.log(`The word "${word}" ${sentence.includes(word)?"is":"is not"} in the sentence`);

// 7) indexof() method
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
const searchterm="dog"
console.log(`The term i.e. ${searchterm} is at position ${paragraph.indexOf(searchterm)}`);