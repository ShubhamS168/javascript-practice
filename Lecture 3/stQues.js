// Prompt the user tom enter the full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the fullname length
// eg: user name = "shubhamsourav", username should be "@shubhamsourav13"



// let str1 = "@"
// let str2 = prompt("enter your name");
// let str3 = str2.length;
// console.log(str1.concat(str2).concat(str3))


let fullname = prompt("Enter the full name without whitespace");
let username = "@" + fullname + fullname.length
