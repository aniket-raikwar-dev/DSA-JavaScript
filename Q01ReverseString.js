// Q1. Reverse the string.
// -> "Hello" -> "olleH"

const reverseString = str => {

  // Method 1 ->
  // return str.split('').reverse().join('');


  // Method 2 ->
  // let res = "";
  // for(let i = 0; i < str.length; i++) {
  //    const char = str[i];
  //    res = char + res;
  // }
  // return res;

  
  // Method 3 ->
  return str.split("").reduce((output, char) => {
    output = char + output;
    return output;
  }, "");

}

const str = "JavaScript";
console.log(reverseString(str));