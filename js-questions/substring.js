function printAllSubstrings(str) {
  let n = str.length;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      console.log(str.substring(i, j + 1));
    }
  }
}

// Example
printAllSubstrings("abc");
// a
// ab
// abc
// b
// bc
// c

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
  for (const char of Array.from(new Set(s))) {
    if (s.match(new RegExp(char, "g")).length < k) {
      return Math.max(...s.split(char).map((str) => longestSubstring(str, k)));
    }
  }
  return s.length;
};
