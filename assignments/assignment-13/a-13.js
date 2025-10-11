let students = [
  { name: "Qasim", age: 18, marks: 85 },
  { name: "Mustafa", age: 19, marks: 92 },
  { name: "Ahmed", age: 17, marks: 78 },
];

for (s of students)
   {
  console.log(` ${s.name} scored ${s.marks}`);
}
console.log("Toppers",students.filter((s) => s.marks > 80));
console.log("Students names",students.map((s) => s.name));
let totalMarks = students.reduce((total,s) => total + s.marks,0)
console.log("Total "+totalMarks);
console.log("Average marks "+totalMarks/students.length);



