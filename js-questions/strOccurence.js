// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack,
// or -1 if needle is not part of haystack.

// Example 1:
// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

// Example 2:
// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (!needle) return 0;
  const split = haystack.split(needle);
  console.log("🚀 ~ strStr ~ split:", split);
  return split.length > 1 ? split[0].length : -1;
};

console.log(
  `🚀 ~ strStr("codeleetcodeleet", "leet"):`,
  strStr("codeleet", "leet")
);
console.log(`🚀 ~ strStr("sadbutsad", "sad"):`, strStr("sadbutsad", "sad"));
