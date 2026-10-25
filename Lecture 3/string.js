// let str1 = "ShubhamSourav";
// let str2 = "ChandigarhUniversity";

// // If you use str1.length() or str2.length(), JavaScript will throw a TypeError because length is not a function but a property.
// // console.log( str1.length(), str2.length())

// console.log(str1[0])


let obj = {
    item : "pen",
    price : 10
};
let output = `The cost of ${obj.item} is ${obj.price} rupees`;
console.log(output)
console.log("The cost of",obj.item, "is",obj.price, "rupees");

// Template Literals
let specialStr = `This is magnum ${1+2+3}`;
console.log( specialStr);

// let str = "Shubham\nSourav";
// console.log(str.length)

let str = "ShubhamSourav";
console.log(str.toUpperCase())
console.log(str) // O/p is ShubhamSourav, the above func does not change original string 
console.log(str.toLowerCase());

let str4 = "     Shubham Sourav      ";
console.log(str4.trim());

let str3 = "abcddef";
console.log(str3.slice(1,4))

console.log(str.concat(str3))

console.log(str3.replace("a", "s"))

str3[0]= "V";
console.log(str3.charAt(0))