// Dont use var as its scope is in block as well as global
let a=12
const b=13
var c=14

if(true){
    let a=20
    const b=30
    c=40
}
console.log(a);
console.log(b);
console.log(c);
