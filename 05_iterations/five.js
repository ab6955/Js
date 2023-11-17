const coding=["JS","PYTHON","CPP","C"]

// coding.forEach( function (value){
//     // console.log(value);
// })

coding.forEach( (value)=> {   // using array (=>) function.
    // console.log(value);
})


function printme(item){
    // console.log(item);
}
coding.forEach(printme)

coding.forEach( (item,index,arr)=>{
    // console.log(item,index,arr);
})


const myCoding=[
    {
        lanName:"JAVASCRIPT",
        lanFileName:"JS"
    },
    {
        lanName:"Ruby",
        lanFileName:"rb"
    },
    {
        lanName:"CPP",
        lanFileName:"C++"
    }
]

myCoding.forEach( (item)=>{
    // console.log(item.lanName);
    // console.log(item.lanFileName);
    console.log(`${item.lanName} => ${item.lanFileName}`);
})