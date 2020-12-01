// function bsearch(array, low, high, target) {
//   if (low > high) {
//     return -1;
//   }
//   let mid = Math.floor((low + high) / 2);
//   if (array[mid] > target) {
//     return bsearch(array, low, mid - 1, target);
//   } else if (array[mid] < target) {
//     return bsearch(array, mid + 1, high, target);
//   } else {
//     return mid;
//   }
// }

// function bsearchWithoutRecursion(array, low, high, target) {
//   while (low <= high) {
//     var mid = Math.floor((low + high) / 2);
//     if (array[mid] > target) {
//       high = mid - 1;
//     } else if (array[mid] < target) {
//       low = mid + 1;
//     } else {
//       return mid;
//     }
//   }
//   return -1;
// }

// function bsearchUpperBound(array, low, high, target) {
//   if (low > high || target >= array[high]) {
//     return -1;
//   }
//   var mid = (low + high) / 2;
//   while (high > low) {}
// }

Array.prototype.binary = function (item) {
  let low = 0;
  let high = this.length - 1;
  console.log("this :>> ", this);
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const element = this[mid];
    if (element < item) {
      low = mid + 1;
    } else if (element > item) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
};

const res = [1, 2, 3, 4, 5, 6, 7].binary(5);
console.log("res :>> ", res);
