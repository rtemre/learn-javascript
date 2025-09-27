// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Example 1:
// Input: s = "IceCreAm"
// Output: "AceCreIm"
// Explanation:
// The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

// Example 2:
// Input: s = "leetcode"
// Output: "leotcede"

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowels = s.match(/[aeiou]/gi);
  function removeLastVowel() {
    return vowels.pop();
  }
  const result = s.replace(/[aeiou]/gi, removeLastVowel);
  return result;
};

console.log(reverseVowels("IceCreAm"));

function reverseVowelsSecondApproach(s) {
  const vowels = s.match(/[aeiou]/gi) || []; // collect vowels
  return [...s] // spread into array
    .map((ch) => (/[aeiou]/i.test(ch) ? vowels.pop() : ch)) // replace if vowel
    .join(""); // back to string
}

console.log(reverseVowelsSecondApproach("IceCreAm")); // "AceCreIm"
