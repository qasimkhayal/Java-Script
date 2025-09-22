function printTable(n) {
  for (let i = 1; i <= 10; i++) {
    let result = n * i;
    console.log(n + " x " + i + " = " + result);
  }
  console.log();
}
printTable(5);
printTable(30);
printTable(52);
