function Circle(radius) {
  this.radius = radius
};

Circle.prototype.draw = function () {
  console.log('Drawing circle');
}

Circle.prototype.toString = function () {
  return `Circle with radius ${this.radius}`;
}

const c1 = new Circle(3);
const c2 = new Circle(4);

console.log(Object.keys(c1));

for(let key in c1) console.log(key);

