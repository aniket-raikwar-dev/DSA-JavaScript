// String Pattern Algorithm is that, there is text and pattern
// we have to find the pattern in that text.
// How many times we find, we have to return that count.
// Example => stringPattern("lolol", "lol") - 2
// Example => stringPattern("lolol", "l") - 3

function stringPattern(text, pattern) {
  let count = 0;

  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      const patternChar = pattern[j];

      if (patternChar !== text[i + j]) {
        break;
      }

      if (j === pattern.length - 1) {
        count = count + 1;
      }
    }
  }

  return count;
}

console.log(stringPattern("lolol", "lol"));
console.log(stringPattern("oneplusone", "on"));
