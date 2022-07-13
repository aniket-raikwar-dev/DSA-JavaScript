// Q1. Reverse the string.
// -> "Hello" -> "olleH"

const reverseString = str => {
  return str.split('').reverse().join('');
}

const str = "JavaScript";
console.log(reverseString(str));