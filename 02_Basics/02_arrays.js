const marvel_heros = ["IronMan", "Captain", "thor"]
const dc_heroes = new Array("Superman", "Batman", "Flash")

// pushng array into another array.
marvel_heros.push(dc_heroes)
// console.log(marvel_heros);
// console.log(marvel_heros.length);
// console.log(marvel_heros);

// concatinate 2 arrays.
//  concatination of 2 arrays have to store in new variable.

const allHeros = marvel_heros.concat(dc_heroes)
// console.log(allHeros);

const all_new_heros = [...dc_heroes, ...marvel_heros]
// console.log(all_new_heros);

// flat
const another_array = [1, 2, [3, 4], [5, 6], 7, 8, [3, 3, 4]]
// console.log(another_array);;
const Real_another_array = another_array.flat(Infinity);
// console.log(Real_another_array);

// Check and convert to array
// console.log(Array.isArray("Abdullah"));
// console.log(Array.from("Hitesh"));
// console.log(Array.from({ name: "Abdullah" }));

let score1=10
let score2=20
let score3=30

console.log(Array.of(score1,score2,score3));
