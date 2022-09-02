// Factory Function
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log('draw');
    },
  };
}

const circle = createCircle(1);

// Factory Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function draw() {
    return `drawing circle with a radius of ${this.radius}`;
  };
}

const circle1 = new Circle(2);

circle.draw();
console.log(circle1.draw());
console.log(circle1.radius);

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// getSummary
Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

// revise
Book.prototype.revise = function (newYear) {
  this.year = newYear;
  this.revised = true;
};

// Instantiate Objects
const book1 = new Book('Book One', 'John Doe', '2013');
const book2 = new Book('Book Two', 'Jane Doe', '2016');

console.log(book2);

// Inheritence
function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);

  this.month = month;
}

// Instantiate Magazine Object
const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'Jan');

console.log(mag1);
