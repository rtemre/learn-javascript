const str = "i am raman";
// output = I Am Raman
function firstUppercase(str = "") {
  return str
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");
}

console.log(firstUppercase(str));

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  return /^[A-Z]?[a-z]+$|^[A-Z]+$/.test(word);
};

console.log(detectCapitalUse("USA")); // true
console.log(detectCapitalUse("FlaG")); // false
console.log(detectCapitalUse("leetcode")); // true
console.log(detectCapitalUse("Google")); // true
