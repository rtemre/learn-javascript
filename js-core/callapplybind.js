// call():
// Invokes a function immediately.
// Allows you to explicitly set the this value for the function call.
// Arguments are passed individually, separated by commas.

const person1 = { name: "Alice" };
function greet1(city, job) {
  console.log(
    `Hello, my name is ${this.name} and I live in ${city} and I am a ${job}.`
  );
}
greet1.call(person1, "New York", "Developer"); // Output: Hello, my name is Alice and I live in New York and I am a Developer.

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// apply():
// Invokes a function immediately.
// Allows you to explicitly set the this value for the function call.
// Arguments are passed as an array (or an array-like object).

const person2 = { name: "Bob" };
function greet2(city, job) {
  console.log(
    `Hello, my name is ${this.name} and I live in ${city} and I am a ${job}.`
  );
}
greet2.apply(person2, ["London", "Designer"]); // Output: Hello, my name is Bob and I live in London and I am a Designer.

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// bind():
// Does not invoke the function immediately.
// Returns a new function with the this value permanently bound to the specified object.
// Arguments can be partially applied when creating the new function,
// and additional arguments can be passed when the new function is later invoked.

const person3 = { name: "Charlie" };
function greet3(city, job) {
  console.log(
    `Hello, my name is ${this.name} and I live in ${city} and I am a ${job}.`
  );
}
const boundGreet = greet3.bind(person3, "Paris");
boundGreet("Engineer"); // Output: Hello, my name is Charlie and I live in Paris and I am a Engineer.

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Key Differences:
// Execution:
// call and apply execute the function immediately; bind returns a new function for later execution.
// Argument Passing:
// call takes individual arguments; apply takes arguments as an array;
// bind takes individual arguments for partial application when creating the new function.
