// Return the Character that are most used in the String
// Ex. "I Loveeeeee noooodleees" => "e"
// Ex. "Onnnneplus" => "n"
// Ex. "12222837" => "2"


const maxChar = (str) => {

  let charObj = {};
  let maxChar = "";
  let maxCount = 0;

  for(let i=0; i<str.length; i++) {
    const char = str[i];

    charObj[char] = charObj[char] + 1 || 1;

    if(charObj[char] > maxCount) {
      maxCount = charObj[char];
      maxChar = char;
    }
  }

  return maxChar;

}


const str = "Annniket";
console.log(maxChar(str));