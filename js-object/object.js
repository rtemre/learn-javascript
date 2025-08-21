// 1. Simplest and most common way to create a single object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

// new Object() Constructor.
const car = new Object();
car.make = "Toyota";
car.model = "Camry";

// constructor functions.
function Animal(name, species) {
  this.name = name;
  this.species = species;
}

const dog = new Animal("Buddy", "Dog");
const cat = new Animal("Whiskers", "Cat");

// ES6 Classes.
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  getInfo() {
    return `${this.title} by ${this.author}`;
  }
}

const novel = new Book("The Great Gatsby", "F. Scott Fitzgerald");

// Object.create() Method.
const protoPerson = {
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

const newPerson = Object.create(protoPerson);
newPerson.name = "Alice";
newPerson.greet(); // Output: Hello, my name is Alice
