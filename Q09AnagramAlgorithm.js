// Solution 2 for checking the String is Anagram or not.


function checkAnagram (stringA, stringB) {

  // step 1 - remove the special character (!,.*^) and make them to Lowercase
  stringA = stringA.toLowerCase().replace(/[\W_]+/g, "");
  stringB = stringB.toLowerCase().replace(/[\W_]+/g, "");

  // step 2 - convert them into array and then sort them and join method
  const stringOne = stringA.split('').sort().join('');
  const stringTwo = stringB.split('').sort().join('');

  // compare both the string
  return stringOne === stringTwo;

}

console.log(checkAnagram("Aniket!", "  aniket!!!"));