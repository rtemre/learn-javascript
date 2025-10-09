// You are given two integer arrays nums1 and nums2 sorted in non-decreasing order and an integer k.

// Define a pair (u, v) which consists of one element from the first array and one element from the second array.

// Return the k pairs (u1, v1), (u2, v2), ..., (uk, vk) with the smallest sums.

// Example 1:
// Input: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
// Output: [[1,2],[1,4],[1,6]]
// Explanation: The first 3 pairs are returned from the sequence:
// [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]

// Example 2:
// Input: nums1 = [1,1,2], nums2 = [1,2,3], k = 2
// Output: [[1,1],[1,1]]
// Explanation: The first 2 pairs are returned from the sequence:
//  [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
  const minHeap = new PriorityQueue((a, b) => a[0] - b[0]);
  const result = [];
  const visited = new Set();

  minHeap.enqueue([nums1[0] + nums2[0], 0, 0]);
  visited.add("0,0");

  for (let count = 0; count < k && !minHeap.isEmpty(); count++) {
    const [currentSum, index1, index2] = minHeap.dequeue();
    result.push([nums1[index1], nums2[index2]]);

    if (index1 + 1 < nums1.length && !visited.has(`${index1 + 1},${index2}`)) {
      minHeap.enqueue([nums1[index1 + 1] + nums2[index2], index1 + 1, index2]);
      visited.add(`${index1 + 1},${index2}`);
    }

    if (index2 + 1 < nums2.length && !visited.has(`${index1},${index2 + 1}`)) {
      minHeap.enqueue([nums1[index1] + nums2[index2 + 1], index1, index2 + 1]);
      visited.add(`${index1},${index2 + 1}`);
    }
  }

  return result;
};

console.log(kSmallestPairs([1, 7, 11], [2, 4, 6], 3)); // [[1,2],[1,4],[1,6]]
console.log(kSmallestPairs([1, 1, 2], [1, 2, 3], 2)); // [[1,1],[1,1]]
