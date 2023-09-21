function one() {
    const username = "Abdullah"

    function two() {
        const website = "Github"
        console.log(username);
    }
    // console.log(website);
    two()
}
one()


console.log(returnOne(3));
function returnOne(num) {
    return num + 1
}

const returnTwo = function (num) {
    return num + 2
}
console.log(returnTwo(4));