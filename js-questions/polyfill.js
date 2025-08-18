// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// [1,2,4,[2,4,8,[7,9,[3,7,6]]]]

const flattenArray = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // console.log(flattenArray(arr[i]))
      result.push(...flattenArray(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};

console.log(
  "Flatten Array = ",
  flattenArray([1, 2, 4, [2, 4, 8, [7, 9, [3, 7, 6]]]])
);

const flatResult = flattenArray([1, 2, 4, [2, 4, 8, [7, 9, [3, 7, 6]]]]);

function customSort(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      // console.log(result)
      result.push(arr[i]);
    }
  }
  return result;
}

console.log("Unique Array = ", customSort(flatResult));

const sortedResult = customSort(flatResult);

// Bubble Sort Implementation
function sortedArray(arr) {
  const n = arr.length;
  // Outer loop for passes
  for (let i = 0; i < n - 1; i++) {
    // Inner loop for comparisons and swaps
    for (let j = 0; j < n - 1 - i; j++) {
      // Compare adjacent elements
      if (arr[j] > arr[j + 1]) {
        // Swap if they are in the wrong order
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log("Sorted Array = ", sortedArray(sortedResult));

// Bubble Sort Implementation
function sortedArrayByBubble(arr) {
  let result = [...arr]; // copy to avoid mutating original
  for (let i = 0; i < result.length; i++) {
    for (let j = i + 1; j < result.length; j++) {
      if (result[i] > result[j]) {
        // swap
        let temp = result[i];
        result[i] = result[j];
        result[j] = temp;
      }
    }
  }
  return result;
}

// Example
console.log(
  "🚀 ~ SortedArrayByBubble:",
  sortedArrayByBubble([5, 2, 9, 1, 5, 6])
);
// 👉 [1, 2, 5, 5, 6, 9]

//  Selection Sort Implementation
function sortedArrayBySelection(arr) {
  let result = [...arr];
  for (let i = 0; i < result.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < result.length; j++) {
      if (result[j] < result[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [result[i], result[minIndex]] = [result[minIndex], result[i]]; // swap
    }
  }
  return result;
}

console.log(
  "🚀 ~ SortedArrayBySelection:",
  sortedArrayBySelection([5, 2, 9, 1, 5, 6])
);
// 👉 [1, 2, 5, 5, 6, 9]

// -------------------------------------------------
// Me try to implement a custom sort function in interview
// function doesn’t actually sort the array — it just pushes some elements into result based on a condition.
// function sortedArray(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = i + 1; j < arr.length - 1; j++)
//         if (arr[i] < arr[j] && arr[i + 1] > arr[j]) {
//           result.push(arr[i]);
//         }
//     }
//     return result;
// }
