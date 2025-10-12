var repeatedStringMatch = function (A, B) {
  const length = Math.ceil(B.length / A.length);
  if (A.repeat(length).includes(B)) return length;
  if ((A.repeat(length) + A).includes(B)) return length + 1;
  return -1;
};

repeatedStringMatch("abcd", "cdabcdab");
repeatedStringMatch("a", "aa");
repeatedStringMatch("abc", "cabcabca");
