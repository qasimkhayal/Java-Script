let name = "Mustafa";
let cons_no = "100";
let units = 50;
let bill = 0;
if (units <= 100) {
  console.log("inside 1");
  
  bill = units * 1;
}

else if (units <= 200) {
  bill = 100 * 1 + (units - 100) * 2;
  console.log("inside 2");
  
} else {
  bill = 100 * 1 + 100 * 2 + (units - 200) * 3;
  console.log("inside 3");

}

console.log("Consumer name", name);
console.log("Consumer NO", cons_no);
console.log("Unit Consume", units);
console.log("Total Bill", bill);
