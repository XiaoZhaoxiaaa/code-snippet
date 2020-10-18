function bubbleSort(arr) {
  const len = arr.length;
  // 外层循环控制循环次数
  for (let i = 0; i < len; i++) {
    // 设置一个标志位，减少不必要的循环
    let flag = false;
    // 内层循环进行两数交换，找每次最大数，排到最后

    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        flag = true;
      }
      //
    }
    if (flag === false) return arr;
  }
  return arr;
}

console.log("sfs", bubbleSort([3, 4, 2, 6, 7, 1, 5]));
