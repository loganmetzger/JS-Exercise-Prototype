/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

// constructor function creation
// Takes name, age, and stomach as Property

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

//Creat an eat method that gives person the ability to eat edible things (up to 10)
//If stomach length < 10, person can eat, if > 10, person cannot eat
//push edible thing to stomach array

Person.prototype.eat = function(edible) {
  if(this.stomach.length < 10) {
    this.stomach.push(edible);
  }
}

Person.prototype.poop = function() {
  this.stomach = [];
}

Person.prototype.toString = function() {
  return `${this.name}, ${this.age}`;
}

//Create object

const personOne = new Person('Logan', 27);
const personTwo = new Person ('Sam', 27);

console.log(personOne.toString());
personOne.eat('Pad Thai');
personOne.eat('Sushi');
personOne.eat('Butter Chicken');

console.log(personOne.stomach);

personOne.poop();

console.log(personOne.stomach);

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function(gallons) {
  this.tank += gallons;
}

Car.prototype.drive = function(distance) {
  this.odometer += distance;
  this.tank -= (distance / this.milesPerGallon);
  if (this.tank = 0) {
    return `I ran out of fuel at ${this.odometer}!`
  }
}



/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
  Person.call(this, name, age);

  this.favoriteToy = favoriteToy;
}

Baby.prototype.play = function() {
  return `Playing with ${this.favoriteToy}`
}

const babyOne = new Baby('Boo', 1, 'Rattle');

// const babyOne = new Baby('pooper', 1, 'Rattle');

/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. Window/Global - When this is called without being nested inside an object, it has no reference or context to pull from. The only context it can choose is from the window aka JS itself.
  2. Implicit - The most common use case of this. When this is referenced inside an object, using this refers back to the object itself. The common dogma here is to the left of the dot is what you are refering to
  3. Explicit - when using the call/apply methods, you are explicitly saying that you want to refer to something in particular when saying this. You must designate what you are refering to here inside the brackets after call/apply
  4. New - Using this with new refers back to the original constructor function. Basically you tell this from the constructor function to use the assignment that you are gtiving it with new
*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}
