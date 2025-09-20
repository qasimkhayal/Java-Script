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
if (grade == "A") {
  result = "You secured top position Amazing!";
} else if (grade == "B") {
  result = "Mashallah Impressive";
} else if (grade == "C") {
  result = "Good but need to improve";
} else if (grade == "D") {
  result = "Need to improve";
}else {
    result= "Invalid result"
}
console.log("Result:"+ result);

