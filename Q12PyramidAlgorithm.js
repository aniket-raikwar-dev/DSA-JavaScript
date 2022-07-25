// Write a Program which takes Positive Integer and print the Pyramid Structure.
// n = 3;
//   #
//  ###
// #####
// THis is the output of number 3.

const pyramid = (n) => {
  for (let i = 1; i <= n; i++) {
    const padding = " ".repeat(n - i);
    const hash = "#".repeat(i * 2 - 1);

    console.log(padding + hash + padding);
  }
}

pyramid(5);