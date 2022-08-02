// Bubble Sort

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] - temp;
      }
    }
  }

  return arr;
}


console.log(bubbleSort([3, 7, 0, 2, 1, 6, 3, 8, 4, 9, 2, 5]));