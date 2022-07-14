// In this, there is a String, we have to make a first Character is Capital.
// Ex. "hello" => "Hello"
// Ex. "aniket raikwar" => "Aniket Raikwar"
// Ex. "i love you k" => "I Love You K"
// Ex. "sHout and sHoRt" => "Shout And Short"


const capitalizeFirstChar = (str) => {

  const arrStr = str.split(' ');
  const arrAns = [];

  for(let i = 0; i < arrStr.length; i++) {

    const word = arrStr[i];
    
    arrAns.push(word[0].toUpperCase() + word.slice(1).toLowerCase());

  }

  const ans = arrAns.join(' ');

  return ans;
}


const str = "hello world";
console.log(capitalizeFirstChar(str));