// Closures

function show() {
  let lang = "javascript";
  function print() {
    console.log(lang);
  }
  print();
}

show();

// Closure Preservation

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Closure Elimination

// Closure elimination in JavaScript refers to techniques and optimizations
// that aim to reduce the overhead or potential memory issues associated with closures.
// While closures are a fundamental and powerful feature of JavaScript,
// their overuse or improper management can lead to performance bottlenecks or memory leaks,
// especially when large data structures are captured.

// Understanding the "Problem" (Potential Issues with Closures):

// Memory Retention:
// Closures retain access to their outer scope's variables.
// If a closure captures a large object or a variable that is no longer needed by other parts of the application,
// that memory may not be garbage collected, leading to increased memory consumption.

// Performance Overhead:
// While modern JavaScript engines are highly optimized,
// creating and managing many closures, especially in performance-critical loops,
// can introduce minor overhead compared to alternative approaches that avoid closures.

// Techniques for "Closure Elimination" (or Optimization):

// Nullifying References:
// Explicitly setting closure references to null when they are no longer needed allows
// the garbage collector to reclaim the memory associated with the captured variables.
// This is crucial for long-lived closures or those holding substantial data.

function createClosureWithLargeData() {
  let largeArray = new Array(1000000).fill("data");
  return function () {
    console.log(largeArray.length);
  };
}

let myClosure = createClosureWithLargeData();
myClosure(); // Use the closure
myClosure = null; // "Eliminate" the closure reference to allow garbage collection

// Avoiding Unnecessary Closures:
// Using let and const for Block Scoping:
