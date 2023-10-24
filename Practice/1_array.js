// Declaration of array
const array=["Abdullah",1,2,3,4,5];
const array1= new Array(1,2,3,4,"Essa")
// console.log(array1);

// Array methods
array.push("Ansari")
// console.log(array);
array.pop()
// console.log(array);

array.unshift(34345)
// console.log(array);

array.shift()
// console.log(array);

// console.log(array.includes(2));

// join converts the array into string
const newArr=array.join()
// console.log(newArr);
// console.log(typeof newArr);

// slice and splice 
// console.log("A:",array);
const myn1=array.slice(1,3)
// console.log(myn1);
// console.log(array);

// console.log("B:",array);
const myn2=array.splice(1,3)   
// console.log(myn2);
// console.log(array);

const Marvel_heroes=["Ironman","spiderman","Thor"]
const Dc_heroes=["Batman","Flash","superman"]

// console.log(Marvel_heroes);
// console.log(Dc_heroes)
// Marvel_heroes.push(Dc_heroes)
// console.log(Marvel_heroes);

// const all_heros=Marvel_heroes.concat(Dc_heroes)   
// console.log(all_heros);

const allNew_heroes=[...Marvel_heroes,...Dc_heroes]
// console.log(allNew_heroes);

// Here push is returning the value in the same array while concat returning it into another array 
// why we need to store it into new variable.

// converting all the sub arrays into one
const another_array=[1,2,3,4,[5,6,[7,8,[9]]]]
const real_another_array=another_array.flat(Infinity)
// console.log(real_another_array);


// console.log(Array.isArray([1,2,2]));
// console.log(Array.isArray("abd"));
console.log(Array.from("Abdullah"));
// console.log(Array.from({name:"abdul"}));   //Interesting

const score1=100
const score2=200
const score3=300

console.log(Array.of(score1,score2,score3));
