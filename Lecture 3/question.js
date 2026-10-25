// print all even number btw 0 to 100

// for(let i = 1; i<=100; i++){
//     if (i % 2 == 0){
//         console.log(i);
//     }
// }

// let gameNum = 88;
// let number = prompt("Guess the correct number :");
// while(number != gameNum){
//     number = prompt("U entered the wrong number,Guess the correct number :");
// }
// console.log("Correct number")
// 2. create a game where u start with any random game number. Ask the user to keep guessing the game number until the user enters the correct value.


let gameNum = 90;
let userNum = prompt("Guess the number :");
while(gameNum != userNum) {
    userNum = prompt("Incorrect,Guess again :");
}
console.log("Correct Guess");