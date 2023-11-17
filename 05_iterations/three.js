// for of loop
const Arr=["Batman",1,2,3,4,5,"Superman"]
for (const value of Arr) {
    // console.log(value)
    // console.log(`Value is ${value}`);
}

const name="My name is Abdullah"
for (const num of name) {
    // console.log(`Char is ${num}`);
}


const map=new Map(  )
map.set("IN","India")
map.set("US","United stated")
map.set("PL","Free palestine")
map.set("IN","India")

// console.log(map);

for (const [key,value] of map) {
    // console.log(key,"=>",value);
    // console.log(`${key} => ${value}`);
}


const myObj={
    "Country 1":"India",
    "Country 2":"US",
} 
for (const key of myObj) {                  // Objects cannot be iterate using forof loop..
    console.log(key);
}
