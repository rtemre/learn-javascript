// Function Composition
/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {

    return function (x) {
        const reverseArr = functions.reverse()
        let sum = x
        for (let i = 0; i < reverseArr.length; i++) {
            const eleFun = reverseArr[i];            
            sum = eleFun(sum)
        }
        return sum
    }
};


const fn = compose([x => x + 1, x => 2 * x])
console.log(fn(4)); // 9



// =======================================================
// Allow once function call:
// To call a JavaScript function only once, 
// even if it is invoked multiple times, 
// one common method involves using a closure and a flag variable
// To track whether the function has already been executed.
// Here is an example implementation: 

function createOnceFunction(func) {
  let hasBeenCalled = false;
  let result;

  return function(...args) {
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      result = func.apply(this, args); // Call the original function
    }
    return result; // Return the result from the first call
  };
}

// Example usage:
function myExpensiveFunction() {
  console.log("This function runs only once!");
  return "Initial result";
}

const runMyExpensiveFunctionOnce = createOnceFunction(myExpensiveFunction);

console.log(runMyExpensiveFunctionOnce()); // "This function runs only once!" followed by "Initial result"
console.log(runMyExpensiveFunctionOnce()); // "Initial result" (function does not run again)
console.log(runMyExpensiveFunctionOnce()); // "Initial result" (function does not run again)
