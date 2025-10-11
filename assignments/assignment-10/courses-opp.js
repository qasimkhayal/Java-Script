class Course {
  title;
  duration;
  fee;
  discountedFee;
  description;

  constructor(t, d, f, de) {
    this.title = t;
    this.duration = d;
    this.fee = f;
    this.description = de;
  }
  applyDiscount(percent) {
    let discount = (this.fee * percent) / 100;
    this.discountedFee = this.fee - discount;
    console.log(
      `Applied discount on ${this.title} of ${percent}%, orignal fee is ${this.fee} but we are running discout this month so you have to pay only ${this.discountedFee} Rupees`
    );
  }
  printDetails() {
    console.log(
      `This course is called ${this.title} , and course duration is ${this.duration}, and fee will be only
       Rs ${this.fee}, ${this.description}  .`
    );
  }
}
const course = new Course(
  "MERN",
  "6 Months",
  18000,
  " Learn full stack web development step by step from design to deployment guided by Mr. Aeraf Abu Husaina, a trusted IT expert with 25+ years of experience. "
);
course.printDetails();

const course1 = new Course(
  "Excel",
  "3 Months",
  20000,
  " Learn Excel step by step from basic to advanced guided by Mr. Abdul Wahhab, a trusted Acc expert with 10+ years of experience. "
);
course.applyDiscount(10);
console.log();

course1.printDetails();
course1.applyDiscount(20);
