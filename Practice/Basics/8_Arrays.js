// Array declaration.
const myArr=[1,2,3,4]
// console.log(myArr);
// console.log(myArr[3]);

const myArr1=new Array("shaktimaan","spidermaan","batmaaaan")
// console.log(myArr1);

// ************************************** Array methods*********************************************
myArr.push("Abdullah")
myArr.push(true)
// console.log(myArr);
// myArr.pop()
// console.log(myArr);

myArr.unshift(9)
// console.log(myArr);

myArr.shift();
// console.log(myArr);

// console.log(myArr.includes("Abdullah"));
// console.log(myArr.indexOf("Abdullah"));


const newArr=myArr.join()  // convert arr into string

// console.log(newArr);
// console.log(typeof newArr);

// console.log("A=>",myArr);
// const myNewArr1=myArr.slice(1,3)
// console.log(myNewArr1);
// console.log("B=>",myArr);

// const myNewArr2=myArr.splice(1,3)
// console.log(myNewArr2);
// console.log("C=>",myArr);


const marvel_Heroes=["Ironman","Captain","Thor"]
const DC_Heroes=["Batman","Flash","Superman"]

// console.log(marvel_Heroes);
// console.log(DC_Heroes);

// marvel_Heroes.push(DC_Heroes)  // push() returns in the same array
// console.log(marvel_Heroes[3]);
// console.log(marvel_Heroes[3][2]);

// const allHeroes=marvel_Heroes.concat(DC_Heroes)   // concat() returns a new array
// console.log(allHeroes);

// const allNewHeroes=[...marvel_Heroes,...DC_Heroes]
// console.log(allNewHeroes)


const anotherArr=[1,2,3,[4,5],6,[7,[8,9]]]
console.log(anotherArr.flat(1));