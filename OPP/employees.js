let employees = [
  { name: "aisha", salary: 3000 },
  { name: "Mustafa", salary: 2000 },
  { name: "Yusuf", salary: 4000 },
];

let employeesUpdated = employees.map((emp) => ({
  name: emp.name,
  salary: emp.salary + 2000,
}));
console.log("Updated Salarie:", employeesUpdated);
