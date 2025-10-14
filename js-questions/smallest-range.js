/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function (nums, k) {
  return Math.max(Math.max(...nums) - Math.min(...nums) - 2 * k, 0);
};

console.log(smallestRangeI([1], 0)); // 0
console.log(smallestRangeI([0, 10], 2));
