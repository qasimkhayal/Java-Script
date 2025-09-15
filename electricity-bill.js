let name = "Mustafa"
let cons_no = "100"
let units = 350;
let Bill = 0;
if (units <= 100) {
   Bill= units * 1.5;
} else if (units < 200) {
  Bill = (units - 200) * 2.5 + (units - 200) * 3.5;
} else {
  Bill = (units - 100) * 3.5;
}

console.log("Consumer name", name);
console.log("Consumer NO", cons_no);
console.log("Unit Consume", units);
console.log("Total Bill", Bill);