// let cities = ["delhi", "pune", "mumbai", "hyderabad"]
// for (city of cities) {
//     console.log(city)
// }

let marks = [98, 86, 99, 56];

let sum = 0;
for (let mark in marks){
    sum = sum +mark;
}
let average = sum/marks.length;
console.log(`Average marks is = ${average}`)
