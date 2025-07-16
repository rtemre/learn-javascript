//  2D array HourGlass problem 

function hourglassSum(arr) {
    let maxSum = -Infinity; // Initialize with a very small number

    // Iterate through rows, stopping 2 rows before the end
    for (let i = 0; i <= arr.length - 3; i++) {
        // Iterate through columns, stopping 2 columns before the end
        for (let j = 0; j <= arr[0].length - 3; j++) {
            const currentSum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] +
                               arr[i + 1][j + 1] +
                               arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];

            if (currentSum > maxSum) {
                maxSum = currentSum;
            }
        }
    }
    return maxSum;
}

// Example usage with a 6x6 array
const matrix = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
];

console.log(hourglassSum(matrix)); // Output: 19 (for the hourglass starting at [3,2])