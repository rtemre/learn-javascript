// Programming.com Interview Question

// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]

//  My solution:
function getIndex(nums, target) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - 1; j++) {
      let add = nums[i] + nums[j + 1];

      if (add === target) {
        if (!result.includes(i)) {
          result.push(i, i + 1);
        }
      }
    }
  }
  return result;
}

console.log(getIndex([2, 7, 11, 15, 3, 0, 6, 9], 9));

// Corrected Brute Force (O(n²)) solution:
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]

// Optimized HashMap solution (O(n)):
function optimizeTwoSum(nums, target) {
  const map = new Map(); // store number -> index
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}

console.log(optimizeTwoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(optimizeTwoSum([3, 2, 4], 6)); // [1, 2]
console.log(optimizeTwoSum([3, 3], 6)); // [0, 1]
