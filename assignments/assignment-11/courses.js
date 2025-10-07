let Courses = [
  { name: "Mern", fee: 3000 },
  { name: "web design", fee: 4000 },
  { name: "Mongo DB", fee: 6000 },
];
let CoursesUpdated = Courses.map((course) => ({
  name: course.name,
  fee: course.fee - 2000,
}));
console.log("Updated Fees:", CoursesUpdated);
