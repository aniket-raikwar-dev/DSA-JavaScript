// There is a Number, we have to print them, if num is divisible by 3 = "Fizz" and
// if num is divisible by 5 = "Buzz" and if num is divisible by both 3 & 5 = "FizzBuzz";

// Ex. Num = 5
// 1
// 2
// Fizz
// 4
// Buzz

const fizzBuzz = (num) => {
  for(let i = 1; i <= num; i++) {
    let str = "";

    if(i % 3 === 0) {
      str += "Fizz";
    }

    if(i % 5 === 0) {
      str += "Buzz";
    }

    if(str == "") {
      str = i;
    }

    console.log(str);
  }
}

const num = 5;
fizzBuzz(num);