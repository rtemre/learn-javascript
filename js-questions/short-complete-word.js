var shortestCompletingWord = function (licensePlate, words) {
  const license = licensePlate.toLowerCase().replace(/[\d\s]+/g, "");
  const sortedWords = [...words].sort((a, b) => a.length - b.length);

  for (const word of sortedWords) {
    let updatedLicense = license;

    for (let i = 0; i < word.length; i++) {
      updatedLicense = updatedLicense.replace(word[i], "");
      if (!updatedLicense) {
        return word;
      }
    }
  }
};

console.log(
  shortestCompletingWord("1s3 PSt", ["step", "steps", "stripe", "stepple"])
);
