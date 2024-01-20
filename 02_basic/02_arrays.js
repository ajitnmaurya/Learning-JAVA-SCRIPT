const marvel_heroes = ["thor", "Ironman", "Loki"]
const dc_heroes = ["superman", "flash", "batman"]

//marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][2]);

// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes);

const all_new_heroes = [...marvel_heroes,...dc_heroes]

//console.log(all_new_heroes);

const anoher_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = anoher_array.flat(Infinity)

console.log(real_another_array);



console.log(Array.isArray("Ajit"));
console.log(Array.from("Ajit"));
console.log(Array.from({name: "Ajit"})); //intersting case

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));