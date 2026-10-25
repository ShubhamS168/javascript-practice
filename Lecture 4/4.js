// concat - join multiple arrays & returns result
let indHeroes = ["Krish", "Flying jatt", "RaOne"];
let dcHeroes = ["Superman", "Batman"];
let marvelHeroes = ["Spiderman", "Ironman", "Thor", "Antman"];

let heroes = indHeroes.concat(marvelHeroes, dcHeroes);
console.log(heroes)

// unshift - add to start, push method
indHeroes.unshift("Shaktiman");
console.log(indHeroes);

// shift - delete the first ele, pop method
let check = marvelHeroes.shift();
console.log(marvelHeroes);

// slice - returns a piece of the array
// does not change the original array
console.log(heroes.slice(1,4)) // it prints 1 to 3

// splice = change original array (add, remove, replace)
let check1 = heroes.splice(2, 1, "Toofan", "Padman");
console.log(check1)
console.log(heroes)

let arr = [1, 2, 3, 4, 5, 6, 7];

//add ele
arr.splice(3, 0, 101)

//delete ele
arr.splice(3, 1);

//remove ele
arr.splice(3, 1, 33)