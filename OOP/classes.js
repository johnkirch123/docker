// class Media {
//   category;
//   medium;
//   title;
//   year;

//   constructor(category, medium, title, year) {
//     this.category = category;
//     this.medium = medium;
//     this.title = title;
//     this.year = year;
//   };

//   printCategory = () => {
//     console.log('category:', this.category);
//   }
// }

// Media.prototype.toString = () => `${this.title} is a ${this.medium}, created in the year ${this.year}`;

// class Book extends Media {
//   author;
//   checkedOut;

//   constructor(title = 'No Title Given', author = 'No Author Given', year = 'No Year Given', category = 'No Category Given', medium = 'No Medium Given') {
//     super(category, medium, title, year);
//     this.author = author;
//   }

//   checkoutBook = () => {
//     this.checkedOut = true;
//   }

//   returnBook = () => {
//     this.checkedOut = false;
//   }

  
// }

// Book.prototype.getStatus = () => {
//   return `This book ${this.checkedOut ? 'is' : "isn't"} checked out.`;
// }

// let book1 = new Book('Year of the Rabbit', 'Sun Tzu', '324', 'philosophy', 'book');
// let book2 = new Book();

// book1.checkoutBook();

// console.log(book2);

class Person {
  name;
  constructor(name) {
    this.name = name;
  }
}

// class Student extends Person {
//   #year;

//   constructor(name, year) {
//     super(name);
//     this.#year = year;
//   }

//   canDoArchery() {
//     return #year > 1;
//   }
// }

class Student extends Person {

  #year;

  constructor(name, year) {
    super(name);
    this.#year = year;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
  }

  canStudyArchery() {
    return this.#year > 1;
  }

}


const student1 = new Student('Jessica Smith', 2);

const teacherFactory = (name, teaches) => ({
    name,
    teaches,
    introduceSelf: () => {
      return console.log(`hello, my name is ${name}`);
    }
  });

  const teacher1 = teacherFactory('Jane Doe', 'Phsycology');
  console.log(teacher1);