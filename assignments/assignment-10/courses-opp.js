class Course {
  title;
  duration;
  fee;
  description;

  constructor(t, d, f, de) {
    this.title = t;
    this.duration = d;
    this.fee = f;
    this.description = de;
    this.disc = (this.fee * 10) / 100 - this.fee;
  }
  printDetails() {
    console.log(
      `This course is called ${this.title} , and course duration is ${this.duration}, and fee will be only ${this.fee},${this.description} and we have running a discount this month so final fee will be ${this.disc} .`
    );
  }
}
const course = new Course(
  "MERN",
  "6 Months",
  "18000",
  " Learn full stack web development step by step from design to deployment guided by Mr. Aeraf Abu Husaina, a trusted IT expert with 25+ years of experience. "
);
course.printDetails();
console.log();
console.log();

const course1 = new Course(
  "Excel",
  "3 Months",
  "20000",
  " Learn Excel step by step from basic to advanced guided by Mr. Abdul Wahhab, a trusted Acc expert with 10+ years of experience. "
);
course1.printDetails();
