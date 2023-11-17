// forin loop used for object
const myObject={
        js:"Javascript",
        cpp:"c++"
}
for (const key in myObject) {
    // console.log(myObject[key]);
    // console.log(`${key} is shortcut for ${myObject[key]}`);
}

// forin loop used for array
const programmingLanguages=["JS","CPP","C","SWIFT","PYTHON"]
for (const key in programmingLanguages) {
//    console.log(key);
//    console.log(programmingLanguages[key]);
}



const map=new Map(  )
map.set("IN","India")
map.set("US","United stated")
map.set("PL","Free palestine")
map.set("IN","India")

for (const key in map) {
   console.log(key);
}


// Use forof loop for array and forin loop for object.