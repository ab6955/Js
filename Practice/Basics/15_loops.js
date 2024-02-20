for (let i = 0; i <= 10; i++) {
    const element = i
    if (i === 4) {
        // console.log("FOUR");
    }
    // console.log(element);
}

for (let i = 1; i <= 10; i++) {

    for (let j = 1; j <= 10; j++) {
        // console.log(`${i} * ${j} = ${i*j}`);
        // console.log(i + "*" + j + "=" + i*j );
    }
    // console.log();
}

const myArray = ["Mohammad", "Abubkar", "Umar", "Usman", "Ali"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// break and continue

for (let i = 0; i <= 6; i++) {
    if (i === 4) {
        // console.log(`${i} is Detected`);
        break; // if break statement is achived then main for loop will end.
    }
    // console.log(i);  
}


for (let i = 0; i < 20; i++) {
    if (i === 5) {
        // console.log(`${i} is Detected`);
        continue
    }
    // console.log(i);
}

// ******* while Loop *****

// let val=1
// while (val<=10) {
//     console.log(`Value is ${val}`);
//     val++;
// }

// const myArr = ["Mohammad", "Abubkar", "Umar", "Usman", "Ali"]
// let arr = 0
// while (arr < myArr.length) {
//     console.log(`${myArr[arr]}`);
//     arr=arr+1;
// }

// ******** do while ****************

// let balance=10
// do {
//     console.log(balance);
// } while (balance<10);


// for of loop
const value1 = [10, 11, 12, 13, 14, 15]
for (const val of value1) {
    // console.log(val);
}

const value2 = "Abdullah Ansari !"
for (const val of value2) {
    if (val == " ") {
        continue;
    }
    // console.log(val);
}

//  loops on Map()
const map = new Map()
map.set("IN", "India")
map.set("CN", "Canada")
map.set("FR", "FRance")
// console.log(map);

// for (const key of map) {
for (const [key, value] of map) {    // syntax for printing both keys and values.

    // console.log(key ,":-",value);
}



// Loops on Objects
const shortName = {
    "js": "javascript",
    "cpp": "c++",
}
for (const key in shortName) {
    // console.log(key);
    // console.log(shortName[key]);
    // console.log(`${key} :- ${shortName[key]}`);
}

const map2 = new Map()
map.set("IN", "India")
map.set("CN", "Canada")
map.set("FR", "FRance")

for (const key in map2) {
    console.log(key);     // forin loop is not iterable for Map(). 
}

const name = ["Abdullah", "Ansari"]
for (let key in name) {
    //    console.log(key);
    // console.log(name[key]);
    // console.log(`${key} :- ${name[key]}`);
}


// For Each loop

const arr1 = ["js", "py", "java"]

// arr1.forEach( function(item){    // In declaration of foreach loop , do not write the name of function and all are same.
arr1.forEach((item) => {
    // console.log(item);
})

function fun(item) {
    // console.log(item);
}

arr1.forEach(fun)   //very interesting and easy. Here only give refernce (do not call the function). 

const coding = [
    {
        programmingLanguage: "java",
        programmingPrice: 100
    },
    {
        programmingLanguage: "javascript",
        programmingPrice: 200

    },
    {
        programmingLanguage: "python",
        programmingPrice: 300
    }
]

coding.forEach((item) => {
    // console.log(item.programmingPrice);
})


// ********* Filter **********


const coding2 = ["js", "py", 'java']
const result = coding2.forEach((item) => {  
    // console.log(item);
    return item;
})
// console.log(result);   // for each loop does not returning anything.


const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNum = num.filter((num) => num > 4)
const newNum = num.filter((num) => {    //if using {} then must use return keyword.
    return num > 4
})
// console.log(newNum);

const newNum2 = []

num.forEach((n1) => {
    if (n1 >= 4) {
        newNum2.push(n1)
    }
})
// console.log(newNum2);   // This and the above one (filter) are totally same.

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];


let bookdata = books.filter((b) => b.edition > 2000)
console.log(bookdata);

// **************** 
