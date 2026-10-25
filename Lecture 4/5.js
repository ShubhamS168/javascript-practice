let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// remove the first company
console.group(companies.splice(0, 1))
console.log(companies);

// remove uber and add ola in its place
console.log(companies.splice(1,1,"Ola"))
console.log(companies);

// add amazon to end
console.log(companies.push("Amazon"));
console.log(companies);