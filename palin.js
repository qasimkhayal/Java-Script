let n =234;
let nCopy = n;
let reverse = 0;
let remainder = 0;

while (n > 0) {
  remainder = n % 10;
  reverse = reverse * 10 + remainder;
  n = Math.floor(n / 10);
}

console.log("Reverse = " + reverse);
if (nCopy === reverse) {
  console.log("It is a Palindrome");
}else{
     console.log("It is not a Palindrome");
}
