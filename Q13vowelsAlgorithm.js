// Wirte a Function that returns the number of vowels found within a string.
// Vowels characters are = 'a', 'e', 'i', 'o', 'u'
// Make sure, the function is case Insensitive.
// Examples ->
// vowels("What") -> 1
// vowels("I am world CLass") -> 3
// vowels("aEIou") -> 5

function vowelsAlgo(str) {
  
  str = str.toLowerCase();
  const vowels = "aeiou".split("");
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    for (let j = 0; j < vowels.length; j++) {
      if (char === vowels[j]) {
        count = count + 1;
      }
    }
  }

  return count;
}

console.log(vowelsAlgo("Hello"));