Function.prototype.inherits2 = function(parent) {
  let Surrogate = function(){};
  Surrogate.prototype = parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

Function.prototype.inherits = function(parent) {
  // let Surrogate = function(){};
  // Surrogate.prototype = parent.prototype;
  this.prototype = Object.create(parent.prototype);
  this.prototype.constructor = this;
};

function MovingObject () {
  this.x = 0;
  this.y = 0;
}

MovingObject.prototype.move = function(dx, dy) {
  this.x += dx;
  this.y += dy;
};

function Ship () {
  this.x = 10;
  this.y = 10;
}
Ship.inherits(MovingObject);

function Asteroid () {
  this.x = 5;
  this.y = 5;
}
Asteroid.inherits(MovingObject);
Asteroid.prototype.explode = function () {
  console.log("boom");
};

let ast = new Asteroid();
console.log(ast);
ast.move(10, 10);
console.log(ast);

function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function bark() {
  console.log(this.name + " barks!");
};

function Corgi(name) {
  Dog.call(this, name);
}

Corgi.inherits(Dog);

Corgi.prototype.waddle = function waddle() {
  console.log(this.name + " waddles!");
};

const blixa = new Corgi("Blixa");
blixa.bark();
blixa.waddle();


