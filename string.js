let name = "  Samsung lenovo apple  ";
console.log(name);
let trimmedName = name.trim();
console.log(trimmedName);
console.log();

let uppercase = trimmedName.toUpperCase();
console.log(uppercase);
let lowercase = trimmedName.toLowerCase();
console.log(lowercase);
console.log(trimmedName.length);
console.log();

console.log(trimmedName.replace("apple", "jio"));
console.log();

console.log(trimmedName.indexOf("apple"));
console.log();
console.log(trimmedName.substring(10));
console.log();
console.log(trimmedName.charAt(12));
console.log();
console.log(trimmedName.concat(name));
console.log();
console.log(trimmedName.includes("Jio"));

let courses = "java,jsx,web,graph";
console.log(courses.split(","));

