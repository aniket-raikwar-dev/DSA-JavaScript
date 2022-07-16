// Check if two strings are anagram to each other.
// One String is an anagram of another If it uses exact same character
// In Exact same quantity. Only consider word character, and make sure, 
// the function is case insensitive.
// Ex. anagram("heart", "earth") => True 
// Ex. anagram("heart", "   earth") => True 
// Ex. anagram("Heart!", "EARTH") => True
// Ex. anagram("lol", "lolc") => False

const anagram = (stringA, stringB) => {

  //sanitize Input Strings
  stringA = stringA.toLowerCase().replace(/[\W_]+/g, "");
  stringB = stringB.toLowerCase().replace(/[\W_]+/g, "");

  if(stringA.length !== stringB.length) {
    return false;
  }

  const obj = {};
  
  for(let i = 0; i < stringA.length; i++) {
    const charA = stringA[i];
    obj[charA] = obj[charA] + 1 || 1;
  }

  for(let i = 0; i < stringB.length; i++) {
    const charB = stringB[i];

    if(!obj[charB]) {
      return false;
    }else {
      obj[charB]--;
    }
  }

  return true;

}

