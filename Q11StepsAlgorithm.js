// the Step algorithm is that we provide the given number n
// n = 3
// #
// ##
// ###
// this is the output of the number 3;


const stepAlgo = (n) => {

  for (let i = 1; i <= n; i++) {
    let step = "";

    for (let hash = i; hash > 0; hash--) {
      step = step + "#";
    }

    for (let space = n - i; space > 0; space--) {
      step = step + " ";
    }

    console.log(step);
  }
}

stepAlgo(3);