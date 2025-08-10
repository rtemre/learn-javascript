// Promisification in JavaScript is the process of transforming a function
// that utilizes a callback-based asynchronous pattern into a function that returns a Promise.
// This transformation is undertaken to leverage the benefits of Promises,
// such as improved readability, enhanced error handling, and
// the ability to use modern asynchronous constructs like async/await and .then() chaining.

// Why Promisify?
// Callback-based asynchronous code, especially when dealing with multiple nested operations (often referred to as "callback hell"),
// can become difficult to read, maintain, and debug.
// Promises offer a more structured and sequential way to manage asynchronous flows, leading to cleaner and more manageable code.

// How Promisification Works:
// The core idea is to wrap the callback-based function within a new function that returns a Promise.
// Inside this Promise constructor, the original callback-based function is invoked.
// The resolve and reject functions of the Promise are then used to signal the success or failure of the asynchronous operation, respectively.

// Example:

// Consider a hypothetical readFile function that uses a Node.js-style callback:
function readFile(filePath, callback) {
  // Simulate asynchronous file reading
  setTimeout(() => {
    if (filePath === "error.txt") {
      callback(new Error("File not found"));
    } else {
      callback(null, "File content");
    }
  }, 100);
}

// To promisify this, a promisify helper function can be created:
function promisify(callbackBasedFn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      callbackBasedFn(...args, (err, data) => {
        if (err) {
          return reject(err);
        }
        resolve(data);
      });
    });
  };
}

const readFilePromise = promisify(readFile);

readFilePromise("data.txt")
  .then((content) => console.log("Content:", content))
  .catch((error) => console.error("Error:", error.message));

// Node.js util.promisify:
// Node.js provides a built-in util.promisify method specifically designed for promisifying Node.js-style callback functions,
// where the callback is the last argument and follows the (err, data) signature.

const util = require("util");
const fs = require("fs");

const readFilePromiseNode = util.promisify(fs.readFile);

readFilePromiseNode("data.txt", "utf8")
  .then((content) => console.log("Content:", content))
  .catch((error) => console.error("Error:", error.message));
