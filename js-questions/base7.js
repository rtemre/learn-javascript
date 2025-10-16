/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
  return num.toString(7);
};

console.log(convertToBase7(100)); // "202"
console.log(convertToBase7(-7)); // "-10"
console.log(convertToBase7(0)); // "0"
console.log(convertToBase7(1)); // "1"
console.log(convertToBase7(-1)); // "-1"
