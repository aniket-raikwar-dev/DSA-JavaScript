// Caesar Cipher Algorithm is Encoding Technique
// In this, the user send a message, it will encoded into another form.

// Ex. caesarCipher("aniket", 2) => "cpkmgw"
// the alphabets is shifted by 2 index.

function caesarCipher(str, size) {
  const alphabetArray = "abcdefghijklmnopqrsrtuvwxyz".split("");
  let res = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const index = alphabetArray.indexOf(char);

    // for numbers, symbols return -1;
    if (index === -1) {
      res = res + char;
      continue;
    }

    const encodedIndex = (index + size) % 26;
    res = res + alphabetArray[encodedIndex];
  }
  return res;
}

console.log(caesarCipher("aniket", 2));