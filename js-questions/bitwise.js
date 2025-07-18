// The **"10 Days of JavaScript"** challenge on HackerRank includes a problem titled **"Bitwise Operators"** on **Day 6**. The challenge usually asks you to perform **bitwise AND, OR, and XOR operations** within a given range.

// ### ✅ Problem Summary:
// You're given a range from `1` to `n`, and an integer `k`. You need to find the **maximum value of `a & b`** (bitwise AND), **where a < b**, and **result < k**.


// ### ✅ Sample Input:
// n = 5
// k = 2

// ### ✅ Sample Output: 1

// ### ✅ Explanation:

// All pairs `(a, b)` such that `1 <= a < b <= n`:
// * 1 & 2 = 0
// * 1 & 3 = 1 ✅
// * 1 & 4 = 0
// * 1 & 5 = 1 ✅
// * 2 & 3 = 2 ❌ (Not valid, 2 >= k)
// * 2 & 4 = 0

// Maximum value of `a & b < k = 2` is `1`.


// ### ✅ JavaScript Solution:

function getMaxLessThanK(n, k) {
    let max = 0;
    for (let a = 1; a < n; a++) {
        for (let b = a + 1; b <= n; b++) {
            let result = a & b;
            if (result < k && result > max) {
                max = result;
            }
        }
    }
    return max;
}

console.log(getMaxLessThanK(5, 2)); // 1


// ### 🔍 Explanation:
// * Loops through all pairs `(a, b)` where `a < b`
// * Computes `a & b`
// * Updates `max` only if result is:
// * Less than `k`
// * Greater than previous max


