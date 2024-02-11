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
        console.log(`${i} is Detected`);
        break; // if break statement is achived then main for loop will end.
    }
    console.log(i);  
}


for (let i = 0; i < 20; i++) {
    if (i === 5) {
        console.log(`${i} is Detected`);
        continue
    }
    console.log(i);
}