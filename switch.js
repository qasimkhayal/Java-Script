let percent = 34.03;
let grade = "";
if (percent >= 80) {
  grade = "A";
} else if (percent >= 60) {
  grade = "B";
} else if (percent >= 40) {
  grade = "C";
} else {
  grade = "D";
}
{
  console.log("Result = " + grade);
  console.log("Result = " + percent);
}

let result = "";

switch (grade) {
  case "A":
    result = "You secured top position Amazing!";
    break;
  case "B":
    result = "Mashallah Impressive";
    break;
  case "C":
    result = "Good but need to improve";
    break;
  case "D":
    result = "Need to improve";
    break;

  default:
    result = "Invalid Grade"
    break;
}

console.log("Result:" + result);
