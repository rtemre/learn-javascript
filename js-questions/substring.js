function printAllSubstrings(str) {
  let n = str.length;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      console.log(str.substring(i, j + 1));
    }
  }
}

// Example
printAllSubstrings("abc");
// a
// ab
// abc
// b
// bc
// c
