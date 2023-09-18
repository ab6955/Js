// Declaration of an objects

// 1)
// const obj1=new Object()
// obj1.name="Abdullah"
// obj1.age=20
// console.log(obj1);

// 2)
// const o1={}
// o1.name="Ansari"
// o1.age=21
// console.log(o1);


// Methods 

// 1) assign 
// const target={a:1,b:2}
// const source1={c:3,d:4}
// const source3={e:5,f:6}
// const source4={g:7,h:8}
// const source5={i:9,j:10}

// const targetObj=Object.assign({},target,source1,source3,source4,source5)
// console.log(targetObj);
// console.log(targetObj==target);

// const  obj={a:1,b:2}
// const copy=Object.assign({obj})
// console.log(copy);




// 2) create
const person = {
    Name: "Abd",
    isHuman: false,
    printIntro: function () {
        console.log(`My Name is ${this.Name} and am I ${this.isHuman}`);
    }
}
// console.log(person["Name"]);  // Name and age keys are not defined in person object instead they did in me
// console.log(person.Age);

const me = Object.create(person)
me.Name = "Ans"
me.Age = 19
// me.isHuman="true"
// console.log(me.Name);
// console.log(me.Age)
// console.log(me.printIntro());
// console.log(person.printIntro());



// 3) Define properties
const object1 = {};
// object1.Name="Abdullah"

// Object.defineProperties(object1,
//     {
//         property1: {
//             Name: "Abdullah",
//             Age: 12,
//         },
//         property2: {
//             Height: 6.2,
//             weight: 70,
//         }
//     })
// console.log(object1.property1);



// 4)freeze
const objec1={
    Name:"abd",
    age:23
}
Object.freeze(objec1)

objec1.Name="Ansari"
console.log(objec1);


// 5)
const objects={}
