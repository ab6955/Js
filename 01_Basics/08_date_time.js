//  ## Date ##
const myDate = new Date()

console.log(typeof myDate);
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleTimeString())

const myCreatedDate1 = new Date(2023, 0, 23, 3, 4, 3)
console.log(myCreatedDate);
console.log(myCreatedDate.toLocaleString());

// const myCreatedDate2=new Date("2023-02-12")
const myCreatedDate2 = new Date("12-23-2023")
console.log(myCreatedDate2.toLocaleString());

// ### Time ###

const myTimeStamp = new Date()
console.log(myTimeStamp);
console.log(myTimeStamp.getTime());
console.log(myCreatedDate2.getTime());
console.log(Math.floor(new Date() / 1000));

const newDate=new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
