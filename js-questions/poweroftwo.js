// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2x.

// Example 1:

// Input: n = 1
// Output: true
// Explanation: 20 = 1
// Example 2:

// Input: n = 16
// Output: true
// Explanation: 24 = 16
// Example 3:

// Input: n = 3
// Output: false

// Constraints:

// -231 <= n <= 231 - 1

// Follow up: Could you solve it without loops/recursion?

function isPowerOfTwo(n) {
  // A number is a power of 2 if it is greater than 0
  // and only one bit is set in its binary representation
  return n > 0 && (n & (n - 1)) === 0;
}

console.log(isPowerOfTwo(1)); // true  (2^0)
console.log(isPowerOfTwo(2)); // true  (2^1)
console.log(isPowerOfTwo(3)); // false
console.log(isPowerOfTwo(16)); // true  (2^4)
console.log(isPowerOfTwo(0)); // false
console.log(isPowerOfTwo(-8)); // false
