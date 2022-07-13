// Check that, the given string is Palindrome or Not.
// What is Palindrome?
// -> a string that can be same in both way (linear or reverse)
// Ex. "wow" -> "wow"
// Ex. "madam" -> "madam"


const isPalindrome = (str) => {
   const res = str.split('').reverse().join('').toLowerCase();
   if(str.toLowerCase() === res) {
    return true;
   }else {
    return false;
   }
}

const str = "Madam";
console.log(isPalindrome(str));