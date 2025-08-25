/* Write your code here
    No need to specify return type 
    Input and output already taken care of, you have to just return the output variable */

function prime(s, e) {
  let count = 0;
  for (let i = s; i <= e; i++) {
    if (isPrimeBasic(i)) {
      count++;
    }
  }
  return count;
}

console.log("🚀 ~ prime(2, 20):", prime(2, 20));

function isPrime(n) {
  if (n < 2) return false; // numbers less than 2 are not prime
  if (n === 2) return true; // 2 is prime
  if (n % 2 === 0) return false; // even numbers greater than 2 are not prime

  for (let i = 3; i * i <= n; i += 2) {
    // check odd numbers only

    if (n % i === 0) return false;
  }
  return true;
}

// Examples:
// console.log(isPrime(2)); // true
// console.log(isPrime(4)); // false
// console.log(isPrime(17)); // true
// console.log(isPrime(9)); // false

function isPrimeBasic(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
