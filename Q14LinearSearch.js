// Linear Search
// have a 3 methods - include, indexOf, find

// implementing all this three methods

const searchInclude = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return true;
    }
  }

  return false;
};


const searchIndexOf = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }

  return -1;
}




const arr = ["Hello", "world", "Makaw", "Routes", "OnePlus"]
console.log(searchInclude(arr, "World"))
console.log(searchIndexOf(arr, "Makaw"))

