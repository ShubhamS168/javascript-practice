// foor loop
// for(let i = 1; i <=5; i++){
//     console.log("Shubham")
// }


// while loop
// let i = 1;
// while(i <= 5){
//     console.log(i);
//     i++;
// }


// dowhile loop
// let i = 10;
// do {
//     console.log(i);
//     i++;
// } while(i<= 5);


//for-of loop

// let str = "ShubhamSourav";
// for(let i of str){
//     console.log("i =", i);
// }

// let str = "ShubhamSourav";
// let size = 0;
// for(let i of str){
//     console.log("i =", i);
//     size++;
// }
// console.log("String Size =", size);

// for-in loop
let student = {
    name : "Shubham Sourav",
    age : 20,
    cgpa : 7.54,
    Ispass : true,
};
for (let key in student){
    console.log("key =",key ,"value =", student[key]);
}