// Problem: Count the frequency of each word in a given string.
// You want to take a string, break it into words, and count how many times each word appears.

function countWords(str) {
  const words = str
    .toLowerCase() // make case-insensitive
    .replace(/[^\w\s]/g, "") // remove punctuation
    .split(/\s+/); // split by spaces

  const wordCount = {};

  for (let word of words) {
    if (word) {
      wordCount[word] = (wordCount[word] || 0) + 1;
    }
  }

  return wordCount;
}

// Example
const text = "Hello world! Hello OpenAI world.";
console.log(countWords(text));

// Output:
// {
//   "hello": 2,
//   "world": 2,
//   "openai": 1
// }
