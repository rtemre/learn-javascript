// To find the second largest number in an array like
const a = [8, 9, 4, 6, 2, 0, 7];

// ✅ Method 1: Sort and Pick
const secondLargest = [...new Set(a)] // remove duplicates
  .sort((x, y) => y - x)[1]; // sort descending and take index 1
console.log(secondLargest); // 8

// ✅ Method 2: Single Pass (Efficient)
function secondLargest2(arr) {
  if (!Array.isArray(arr) || arr.length < 2) return undefined;
  let first = -Infinity,
    second = -Infinity;
  for (const num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num < first) {
      second = num;
    }
  }
  return second === -Infinity ? undefined : second;
}
console.log(secondLargest3([10, 5, 20, 8])); // 10

// ✅ Method 3: Using Math.max + filter
const max = Math.max(...a);
const secondLargest3 = Math.max(...a.filter((n) => n !== max));
console.log(secondLargest3); // 8
