// Reverse the Number 
// I/P = 31 , O/P = 13
// I/P = 782 , O/P = 287
// I/P = -13 , O/P = -31



const reverseInt = (num) => {
  let res = num.toString().split('').reverse().join('');
  let ans = parseInt(res);

  if(num < 0) {
    return ans * -1;
  }

  return ans;
}


const num = -31;

console.log(reverseInt(num));
