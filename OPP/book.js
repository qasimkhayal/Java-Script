class Book {
  title;
  author;
  genre;
  year;
  pages;
  constructor(t, a, g, y, p) {
    this.title = t;
    this.author = a;
    this.genre = g;
    this.year = y;
    this.pages = p;
  }
  printDetails() {
    console.log(
      `${this.title} is written by ${this.author}, published in ${this.year},${this.pages} pages.`
    );
  }
}
const book1 = new Book("Atomic Habits", "James Clear", "Self-help", 2018, 320);
book1.printDetails();
