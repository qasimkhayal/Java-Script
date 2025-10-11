class Product {
  name;
  price;
  quantity;
  constructor(n, p, u, q) {
    this.name = n;
    this.price = p;
    this.quantity = q;
  }
  printDetails(newQuantity) {
    let updatedQuantity = newQuantity + this.quantity;
   

    console.log(
      `This device is ${this.name} , and a single piece will be cost ${this.price},currently we have ${updatedQuantity} pieces , if you are purchasing ${this.quantity} devices,`
    );
  }
  calculateValue() {
    let totalValue = this.price * this.quantity;
    console.log(
      `then your price of ${this.quantity} ${this.name} will be ${totalValue}RS only `
    );
  }
  // restock(newQuantity){
  //   let updatedQuantity = ( this.quantity + newQuantity);

  applyDiscount(percent) {
    let totalValue = this.price * this.quantity;
    let discount = (totalValue * percent) / 100;
    let discountedprice = totalValue - discount;
    console.log(
      `but we are runnig a special discount on our store of ${percent}% on every bill so your final amount  will be  ${discountedprice}INR only `
    );
  }
}

const product = new Product(
  "Lenovo intel core i5",
  20000,
  this.updatedQuantity,
  3
);
product.printDetails(3);

product.calculateValue();
// product.restock(2);
product.applyDiscount(10);
