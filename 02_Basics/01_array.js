// const myArr=[0,1,2,3,4]
const myArr=new Array(0,1,2,3,4,5)
console.log(myArr);
console.log(myArr[1]);

// const myArr2=["Mohammad","Abubakr","Umar","Usman","Ali"]
const myArr2=new Array("Mohammad","Abubakr","Umar","Usman","Ali")
console.log(myArr2);
console.log(myArr2[3]);

console.log(myArr.length);
console.log(myArr2.length);

// Array Methods

// 1)push and pop
myArr.push(33)
console.log(myArr);
myArr.pop()
console.log(myArr);

// 3) unshift and shift
myArr2.unshift("Abdullah")
console.log(myArr2);

myArr2.shift()
console.log(myArr2);

// 4) includes and indexof
console.log(myArr.includes(6));
console.log(myArr2.indexOf("Umar"));

// 5) join 
const  myArr3=myArr.join()
console.log(myArr);
// console.log(myArr3)/;
console.log(typeof myArr3);

// 6) slice and splice
const Arr1=myArr.slice(1,3)
console.log(myArr);
console.log(Arr1);

const Arr2=myArr.splice(1,3)
console.log(myArr);
console.log(Arr2);

// Slice does not manipulate the original array but splice does
