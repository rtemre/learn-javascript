// Given an array nums of n integers where nums[i] is in the range [1, n],
// return an array of all the integers in the range [1, n] that do not appear in nums.

// Example 1:
// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]

// Example 2:
// Input: nums = [1,1]
// Output: [2]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const result = [];

  for (let i = 0; i < nums.length; ) {
    if (nums[nums[i] - 1] !== nums[i]) {
      [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
    } else {
      i++;
    }
  }

  nums.forEach((v, i) => {
    if (v != i + 1) {
      result.push(i + 1);
    }
  });

  return result;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])); // [5,6]
console.log(findDisappearedNumbers([1, 1])); // [2]
console.log(findDisappearedNumbers([2, 2])); // [1]
console.log(findDisappearedNumbers([1, 2, 3, 4, 5]));
