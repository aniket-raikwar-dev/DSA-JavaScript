// Chunk Algorithm is applied on Arrays
// chunck([1, 2, 3, 4, 5, 6], 2) => [[1,2], [3,4], [5,6]]
// chunck([1, 2, 3, 4, 5, 6], 3) => [[1, 2, 3], [4, 5, 6]]



// Solution 1
// using Slice Method 
const chunkAlgo = (arr, size) => {
  const chuncked = [];
  let index = 0;
  while(index < arr.length) {
    chuncked.push(arr.slice(index, index+size));
    index = index + size;
  }

  return chuncked;
}

const nums = [1, 2, 3, 4, 5, 6];
const s = 2;
console.log(chunkAlgo(nums, s));






// Solution 2
const chunckAlgorithm = (arr, size) => {
  let res = [];
  
  for(let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const last = res[res.length - 1];

    if(!last || last.length === size) {
      res.push([item]);
      console.log("res",res);
    }else {
      last.push(item);
      console.log("last",last);
    }
  }
  return res;
}

const arr = [1, 2, 3, 4, 5, 6];
const size = 2;

// console.log(chunckAlgorithm(arr, size));