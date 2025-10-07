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

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Given an array of strings strs, return the length of the longest uncommon subsequence between them.
// If the longest uncommon subsequence does not exist, return -1.

// An uncommon subsequence between an array of strings is a string that is a subsequence of one string
// but not the others.

// A subsequence of a string s is a string that can be obtained after deleting any number of characters from s.

// For example, "abc" is a subsequence of "aebdc" because you can delete
// the underlined characters in "aebdc" to get "abc".
// Other subsequences of "aebdc" include "aebdc", "aeb", and "" (empty string).

// Example 1:
// Input: strs = ["aba","cdc","eae"]
// Output: 3

// Example 2:
// Input: strs = ["aaa","aaa","aa"]
// Output: -1

var findLUSlength = function (strs) {
  strs.sort((a, b) => b.length - a.length);

  for (let i = 0; i < strs.length; i++) {
    let isUnique = true;
    for (let j = 0; j < strs.length; j++) {
      if (i !== j && isSubsequence(strs[i], strs[j])) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) {
      return strs[i].length;
    }
  }

  return -1;

  function isSubsequence(s1, s2) {
    let index = 0;
    for (const char of s2) {
      if (char === s1[index]) index++;
      if (index === s1.length) return true;
    }
    return false;
  }
};
