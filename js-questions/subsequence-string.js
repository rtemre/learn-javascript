// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
// Example 1:
// Input: s = "abc", t = "ahbgdc"
// Output: true

// Example 2:
// Input: s = "axc", t = "ahbgdc"
// Output: false

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s.length > t.length) return false;
  let count = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[count] === t[i]) {
      count++;
    }
  }
  return count === s.length;
};
console.log(isSubsequence("abc", "ahbgdc")); // true
console.log(isSubsequence("axc", "ahbgdc")); // false

// ============================================================
// Given two strings a and b, return the length of the longest uncommon subsequence between a and b.
// If no such uncommon subsequence exists, return -1.
// An uncommon subsequence between two strings is a string that is a subsequence of exactly one of them.

// Example 1:
// Input: a = "aba", b = "cdc"
// Output: 3
// Explanation: One longest uncommon subsequence is "aba" because "aba" is a subsequence of "aba" but not "cdc".
// Note that "cdc" is also a longest uncommon subsequence.

var findLUSlength = function (a, b) {
  return a === b ? -1 : Math.max(a.length, b.length);
};

console.log(findLUSlength("aba", "cdc")); // 3
console.log(findLUSlength("aaa", "aaa")); // -1
