// Given a string s, reverse the order of characters in each word within a sentence
// while still preserving whitespace and initial word order.

// Example 1:
// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

// Example 2:
// Input: s = "Mr Ding"
// Output: "rM gniD"

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (str) {
  return str
    .split(/\s/)
    .map((s) => s.split("").reverse().join(""))
    .join(" ");
};

console.log(reverseWords("Let's take LeetCode contest"));
console.log(reverseWords("Mr Ding"));
