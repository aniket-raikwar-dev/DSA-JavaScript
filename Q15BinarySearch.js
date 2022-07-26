// Binary Search is a Searching technique. which is more optimized than Linear Search
// Time Complexity = O(log n)

// Apply only in sorted array.

const binarySearch = (arr, val) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);
    const midValue = arr[mid];

    if (midValue === val) {
      return mid;
    } else if (midValue < val) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
};


const arr = [2, 4, 7, 10, 14, 20, 23, 35, 56, 78, 90];
console.log(binarySearch(arr, 78));
console.log(binarySearch(arr, 10));
