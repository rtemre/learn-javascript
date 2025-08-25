// Using recursion
// Time Complexity: O(n)
// Space Complexity: O(n) (due to recursion stack)
function fact_recursion(n) {
  if (n <= 1) return 1;
  return n * fact_recursion(n - 1);
}

console.log(fact_recursion(5));

// Iterative Soultion
// No recursion → avoids stack overflow for large n.
// Time Complexity: O(n)
// Space Complexity: O(1)
function fact_iterative(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(fact_iterative(5));
