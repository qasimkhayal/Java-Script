let fruit = ["Lychee", "Mango", "Banana", "Watermelon", "Papaya"];
fruit.shift();
fruit.unshift("Apple");
console.log(fruit);
console.log(
  " Position of fruit in these fruits " +
    fruit.indexOf("Banana") +
    "-- " +
    fruit
);
console.log(
  "Includes means checking the fruit is availaible in array or not  --  " +
    fruit +
    ".." +
    fruit.includes("Banana")
);
console.log("Slice " + fruit.slice(1, 4));

let numbers = [14, 16, 17, 18];
let numbers2 = [19, 20, 21];
console.log(numbers.concat(numbers2));

total = 0;
for (let n of numbers) {
  total = total + n;
}
console.log(numbers2 + "..total  = " + total);
