let students = ["Qasim", "Zamman", "Mustafa", "Saqeef"];

students[1] = "Nasheel";
students.push("Maryam");
students.push("Zaeem");
students.push("Basim");
students.pop();
console.log("Students Count  " + students.length );
let j ;
console.log("List of students")
for(let i = 0; i < students.length; i++){
    j = i+1;
    console.log("roll No" +j+ "--"+ students[i]);
}