// Given a positive integer n, find and return the longest distance between any two adjacent 1's in the binary representation of n. If there are no two adjacent 1's, return 0.

// Two 1's are adjacent if there are only 0's separating them (possibly no 0's). The distance between two 1's is the absolute difference between their bit positions. For example, the two 1's in "1001" have a distance of 3.

 

// Example 1:

// Input: n = 22
// Output: 2
// Explanation: 22 in binary is "10110".
// The first adjacent pair of 1's is "10110" with a distance of 2.
// The second adjacent pair of 1's is "10110" with a distance of 1.
// The answer is the largest of these two distances, which is 2.
// Note that "10110" is not a valid pair since there is a 1 separating the two 1's underlined.


/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
    let binary = n.toString(2);
    let lastIndex = -1;
    let maxDistance = 0;

    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === '1') {
            if (lastIndex !== -1) {
                maxDistance = Math.max(maxDistance, i - lastIndex);
            }
            lastIndex = i;
        }
    }

    return maxDistance;
};
console.log(binaryGap(22)); // Output: 2
// 22 in binary: "10110", distances between 1's are 2 and 1 → max is 2









// ===============================================================================

// Write a function:

// function solution(N);

// that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

// For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

// A binary gap is a maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of a number.


function solution(N) {
    // Convert N to binary string
    const binaryStr = N.toString(2);

    let maxGap = 0;
    let currentGap = 0;
    let inGap = false;

    for (let char of binaryStr) {
        if (char === '1') {
            // If we're in a gap, finalize it
            if (inGap) {
                maxGap = Math.max(maxGap, currentGap);
                currentGap = 0;
            }
            // Start counting a new gap
            inGap = true;
        } else if (inGap) {
            // Count zeros only if we're in a valid gap
            currentGap++;
        }
    }

    return maxGap;
}
console.log(solution(1041)); // Output: 5
console.log(solution(32));   // Output: 0
console.log(solution(529));  // Output: 4
console.log(solution(20));   // Output: 1
console.log(solution(15));   // Output: 0
