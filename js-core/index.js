const array = [1, 2, 3, 4, 5]

// Using let keyword
for (let i = 0; i < 5; i++) {
    setTimeout(() => console.log(array[i]), 1000)    
}
// Output
// 1
// 2
// 3
// 4
// 5

// Using var keyword
for (var i = 0; i < 5; i++) {
    setTimeout(() => console.log(array[i]), 1000)    
}
// Output
// Undefined
// Undefined
// Undefined
// Undefined
// Undefined

// Why ?

// ### **JavaScript: `let` vs `var` in loops with `setTimeout`**

// #### 🔹 `let`:

// * **Block-scoped**: A **new `i` is created** for each iteration.
// * Closures capture the correct value of `i`.
// * ✅ Output: `1, 2, 3, 4, 5`

// #### 🔹 `var`:

// * **Function-scoped**: Only **one `i`** is shared across all iterations.
// * By the time `setTimeout` runs, `i` has become `5`.
// * ❌ Output: `undefined, undefined, undefined, undefined, undefined` (because `array[5]` is out of bounds)

// #### 💡 Fixing `var`:

// Use an IIFE or pass `i` to a function to create a new scope.

// for (var i = 0; i < 5; i++) {
//   (function(iCopy) {
//     setTimeout(() => console.log(array[iCopy]), 1000)
//   })(i)
// }

// ### ✅ Key Takeaway:

// Use `let` in loops when closures or async functions are involved, to avoid scoping issues.
