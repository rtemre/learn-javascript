/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++; // no carry needed
      return digits;
    }
    digits[i] = 0; // reset and carry to next iteration
  }

  // If all were 9 (e.g., [9,9,9]) → need an extra digit
  digits.unshift(1);
  return digits;
};

console.log(plusOne([1, 2, 3])); // [1,2,4]

// plusOne([1,2,3]) → [1,2,4]
// plusOne([9]) → [1,0]
// plusOne([9,9,9]) → [1,0,0,0]
