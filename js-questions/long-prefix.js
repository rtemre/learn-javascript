// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""

// Explanation: There is no common prefix among the input strings.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const prefixes = strs[0].split("").map((_, i) => strs[0].slice(0, i + 1));

  for (let i = strs.length - 1; i > -1; i--) {
    for (let j = prefixes.length - 1; j > -1; j--) {
      if (strs[i].substring(0, j + 1) !== prefixes[j]) {
        prefixes.pop();
      }
    }
  }

  return prefixes.pop() || "";
};

console.log(
  `🚀 ~ longestCommonPrefix`,
  longestCommonPrefix(["flower", "flow", "flight"])
);
