// Sliding Window Maximum

// You are given an array of integers nums,
// there is a sliding window of size k which is moving from the very left of the array to the very right.
// You can only see the k numbers in the window.
// Each time the sliding window moves right by one position.

// Return the max sliding window.

// Example 1:
// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation:
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7

// Example 2:
// Input: nums = [1], k = 1
// Output: [1]

function slidingWindowMaximum(nums = [], k = 0) {
  let result = [];
  let len = nums.length;

  for (let i = 0; i <= len - k; i++) {
    let max = nums[i];
    for (let j = 1; j < k; j++) {
      console.log(nums[j + i], ">", max);

      if (nums[j + i] > max) {
        max = nums[j + i];
      }
    }
    result.push(max);
  }
  return result;
}

const nums = [1, 3, -1, -3, 5, 3, 6, 7],
  k = 3;

console.log(slidingWindowMaximum(nums, k));
// Output [ 3, 3, 5, 5, 6, 7 ]
