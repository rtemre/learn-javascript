// The function must modify the input array s in-place and should not return a new array.

var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // Swap elements
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
};

let s = ["h", "e", "l", "l", "o"];
reverseString(s);
console.log(s); // ["o","l","l","e","h"]

// In-place Reverse using for loop:
// var reverseString = function(s) {
//     let n = s.length;
//     for (let i = 0; i < Math.floor(n / 2); i++) {
//         let temp = s[i];
//         s[i] = s[n - 1 - i];
//         s[n - 1 - i] = temp;
//     }
// };

// Recursive In-place Reverse:
// var reverseString = function(s, left = 0, right = s.length - 1) {
//     if (left >= right) return;

//     // Swap elements at left and right
//     [s[left], s[right]] = [s[right], s[left]];

//     // Recurse inward
//     reverseString(s, left + 1, right - 1);
// };

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Given a string s and an integer k, reverse the first k characters for every 2k characters
// counting from the start of the string.

// If there are fewer than k characters left, reverse all of them.
// If there are less than 2k but greater than or equal to k characters,
// then reverse the first k characters and leave the other as original.

// Example 1:
// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"

// Example 2:
// Input: s = "abcd", k = 2
// Output: "bacd"

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  const split = s.split("");
  for (let i = 0; i < s.length; i += 2 * k) {
    split.splice(i, 0, ...split.splice(i, k).reverse());
  }
  return split.join("");
};

console.log(reverseStr("abcdefg", 2)); // "bacdfeg"
console.log(reverseStr("abcd", 2)); // "bacd"
