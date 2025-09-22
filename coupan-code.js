let totalBill = 3000;
let coupanCode = "DISC80";
let discountPercent = 0;
switch (coupanCode) {
  case "DISC10":
    discountPercent = 10;
    break;
  case "DISC5":
    discountPercent = 5;
    break;
  case "DISC20":
    discountPercent = 20;
    break;
  case "DISC80":
    discountPercent = 80;
    break;
  default:
    discountPercent = 0;
    break;
}
let discountAmount = (totalBill * discountPercent) / 100;
let FinalBill = totalBill - discountAmount;
console.log("Actual Bill =", totalBill);
console.log("After Discount bill = ",FinalBill);
console.log("Coupan Code Applied",coupanCode);
