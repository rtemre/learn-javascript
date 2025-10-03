// Given a binary array nums, return the maximum number of consecutive 1's in the array.

// Example 1:
// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

// Example 2:
// Input: nums = [1,0,1,1,0,1]
// Output: 2

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let max = 0;
  for (let i = 0, count = 0; i < nums.length; i++) {
    count = nums[i] ? count + 1 : 0;
    max = Math.max(max, count);
  }
  return max;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // 3
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])); // 2
console.log(findMaxConsecutiveOnes([1, 1, 1, 1, 1])); // 5
console.log(findMaxConsecutiveOnes([0, 0, 0, 0])); // 0
