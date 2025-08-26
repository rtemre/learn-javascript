//  Implement Caching or Memoizing Function

function memoize(fn, context) {
  const cache = {};
  return function (...args) {
    const argsCache = JSON.stringify(args);
    if (!cache[argsCache]) {
      cache[argsCache] = fn.call(context || this, ...args);
    }
    return cache[argsCache];
  };
}

const clumsySquare = (num1, num2) => {
  for (let i = 0; i < 10000000; i++) {}
  return num1 * num2;
};

const memoizedClumsySquare = memoize(clumsySquare);

console.time("First Call");
console.log(clumsySquare(5, 5));
console.timeEnd("First Call");

console.time("Second Call");
console.log(clumsySquare(5, 5));
console.timeEnd("Second Call");

console.time("First Call with memoized");
console.log(memoizedClumsySquare(5, 5));
console.timeEnd("First Call with memoized");

console.time("Second Call with memoized");
console.log(memoizedClumsySquare(5, 5));
console.timeEnd("Second Call with memoized");
