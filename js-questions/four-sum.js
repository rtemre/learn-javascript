// Given four integer arrays nums1, nums2, nums3, and nums4 all of length n,
// return the number of tuples (i, j, k, l) such that:

// 0 <= i, j, k, l < n
// nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0

// Example 1:
// Input: nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
// Output: 2
// Explanation:
// The two tuples are:
// 1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0
// 2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0

// Example 2:
// Input: nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0]
// Output: 1

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  const map = new Map();
  nums1.forEach((n1) => {
    nums2.forEach((n2) => map.set(n1 + n2, (map.get(n1 + n2) || 0) + 1));
  });
  return nums3.reduce((count, n3) => {
    return (
      count + nums4.reduce((sum, n4) => sum + (map.get(-(n3 + n4)) || 0), 0)
    );
  }, 0);
};

console.log(fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2])); // Expected output: 2
console.log(fourSumCount([0], [0], [0], [0])); // Expected output: 1
