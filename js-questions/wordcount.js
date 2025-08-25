function countWords(str) {
  // Trim to remove leading/trailing spaces and split by one or more spaces
  // /\s+/ is a regular expression. Let’s break it down:
  // /.../ → Denotes a regular expression in JavaScript.
  // \s → Matches any whitespace character, including:
  // Space (" ")
  // Tab (\t)
  // Newline (\n)
  // Carriage return (\r)
  // + → Means one or more occurrences of the preceding pattern.
  const words = str.trim().split(/\s+/);

  // Handle empty string
  return str.trim() === "" ? 0 : words.length;
}

console.log(countWords("Hello World")); // 2
console.log(countWords("aba")); // 1
console.log(countWords("  multiple   spaces  ")); // 2
console.log(countWords("")); // 0
