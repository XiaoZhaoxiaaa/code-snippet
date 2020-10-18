// function selectSort(arr) {
//   const len = arr.length;
//   let minIndex;
//   for (let i = 0; i < len - 1; i++) {
//     minIndex = i;
//     for (let j = i; j < len; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }
//     if (minIndex !== i) {
//       [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//     }
//   }
//   return arr;
// }
/**
 *
 * @param {} arr
 * 选择排序
 */
function select(arr) {
  // 缓存数组长度
  const len = arr.len;
  for (let i = 0; i < len - 1; i++) {
    // 定义minIndex,缓存当前区间最小值的索引，假设第一个元素是最小
    let minIndex = 0;
    // i,j 分别定义当前区间的上下界，i是左边界，j是右边界
    for (let j = i; j < len; j++) {
      // 若j 的数据比当前最小值还小，则更新最小值索引为j
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // 如果minIndex 对应元素不是目前头部元素，则交换两者
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}
