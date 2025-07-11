function createCounter() {
  let count = 0; // This 'count' variable is part of the closure

  return function() {
    count++;
    return count;
  };
}

const counter1 = createCounter();
console.log(counter1()); // Output: 1
console.log(counter1()); // Output: 2

const counter2 = createCounter(); // Creates a new closure with its own 'count'
console.log(counter2()); // Output: 1