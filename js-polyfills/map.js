const arr = [1,2,3,4,5]

function myMap() {
    console.log(arr);
    
}

myMap();

// Here is a common implementation of a map polyfill:
if (!Array.prototype.map) {
  Array.prototype.map = function(callback, thisArg) {
    if (typeof callback !== 'function') {
      throw new TypeError('Callback must be a function');
    }

    const array = this;
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
      // Ensure the element actually exists in the array (not sparse arrays)
      if (i in array) {
        newArray[i] = callback.call(thisArg, array[i], i, array);
      }
    }

    return newArray;
  };
}