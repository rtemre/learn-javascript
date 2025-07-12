// To find the Largest Sum Contiguous Subarray, you can use Kadane's Algorithm. It's an efficient algorithm with O(n) time complexity.

// Algorithm to find Largest Sum Contiguous Subarray
// lets assume there is an array = [-2, -3, 4, -1, -2, 1, 5, -3]

function maxSubArray(arr) {
  let maxSoFar = arr[0];
  let maxEndingHere = arr[0];
  let start = 0, end = 0, s = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxEndingHere + arr[i]) {
      maxEndingHere = arr[i];
      s = i;
    } else {
      maxEndingHere += arr[i];
    }

    if (maxEndingHere > maxSoFar) {
      maxSoFar = maxEndingHere;
      start = s;
      end = i;
    }
  }

  return {
    maxSum: maxSoFar,
    subarray: arr.slice(start, end + 1)
  };
}

// Example usage
const arr2 = [-2, -3, 4, -1, -2, 1, 5, -3];
const result = maxSubArray(arr2);
console.log("Maximum contiguous sum is", result.maxSum);
console.log("Subarray is", result.subarray);
// Output
// Maximum contiguous sum is 7
// Subarray is [4, -1, -2, 1, 5]
