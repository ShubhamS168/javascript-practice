const student = {
    fullName : "Shubham Sourav",
    age : 20,
    marks : 7.8,
    isPass : true
};
student["age"] = student["age"] + 1;
console.log(student["age"]);

console.log(student.fullName);

student["name"] = "Sourav";
console.log(student["name"]);