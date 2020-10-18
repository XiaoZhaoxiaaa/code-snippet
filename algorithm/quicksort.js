// function mergeSort(arr) {}

// function mergeArr(arr1, arr2) {
//   let i = 0,
//     j = 0;
//   const res = [];
// }

/**
 * 快速排序，
 * @param {*} arr
 */
function qSort3(arr) {
  if (arr.length === 0) return [];
  let left = [];
  let center = [];
  let right = [];
  let pivot = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] === pivot) {
      center.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...qSort3(left), ...center, ...qSort3(right)];
}
