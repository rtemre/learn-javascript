// Problem Description
// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Solution
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const cache = new Map();
  const memo = (n) => {
    if (n < 4) return n;
    if (!cache.has(n)) {
      cache.set(n, memo(n - 2) + memo(n - 1));
    }
    return cache.get(n);
  };
  return memo(n);
};

climbStairs(3); // 3

climbStairs(2); // 2

// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
