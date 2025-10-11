let products = [
  { name: "Laptop", price: 900, stock: 20 },
  { name: "Mouse", price: 25, stock: 100 },
  { name: "Monitor", price: 150, stock: 50 },
];

products.unshift({ name: "mobile", price: 40, stock: 20 });
console.log(products);
products.unshift({ name: "keyboard", price: 20, stock: 20 });
console.log(products);
console.table(products);
console.log(
  "Affordable products",
  products.filter((p) => p.price < 80)
);
let total = products.reduce((total, p) => total + p.price, 0);
console.log("Average price ",total/products.length);
console.log(
  "Products names",
  products.map((p) => p.name)
);
let totalStock = products.reduce((total, p) => total + p.stock, 0);
console.log(totalStock);


