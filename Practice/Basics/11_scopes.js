function one() {
    const username = "Abdullah"
    console.log(username);

    function two() {
        const name = "Ansari"
        console.log(name);
    }
    two()
    console.log(username);
}
// one()

// *********** interesting***************

console.log(addOne(3));

function addOne(val1){
    return val1+1;
}

const addTwo=function(val2){
    return val2+2;
}

console.log(addTwo(4));    // if function is declared in variables then it cannot be initiaze before declaraing.
