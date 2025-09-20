for (let n = 1; n <= 50; n++) {
  if (n % 3 == 0 && n % 5 == 0) {
    console.log("FIZZBUZZ");
  } else if (n % 3 == 0) {
    console.log("FIZZ");
  } else if (n % 5 == 0) {
    console.log("BUZZ");
  } else {
    console.log(n);
  }
}
