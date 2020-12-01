// var twoSum = function (nums, target) {
//   let map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     let k = target - nums[i];
//     console.log("k :>> ", k);
//     console.log("map :>> ", map);
//     if (map.has(k)) {
//       return [map.get(k), i];
//     }
//     map.set(nums[i], i);
//   }
//   return [];
// };

// let res = twoSum([2, 7, 11, 15], 9);
// console.log("res :>> ", res);

var arr = [{ a: 1 }, { a: 2 }, { a: 2 }, { a: 1 }, { a: 3 }];
const map = new Map();
let result3 = new Set();
arr.filter((item) => {
  map.has(item.a) ? result3.add(item) : map.set(item.a, 1);
});
console.log("result ---- 3", [...result3]);

var arr = [{ a: 1 }, { a: 2 }, { a: 2 }, { a: 1 }, { a: 3 }];
const res = new Map();
let result2 = [];
arr.filter((item) => {
  console.log("item :>> ", item, res);
  res.has(item.a) ? result2.push(item) : res.set(item.a, 1);
});
console.log("arr :>> ", arr);
console.log("res :>> ", res);
console.log("result ---- 2", result2);

// var arr = [{ a: 1 }, { a: 2 }, { a: 2 }, { a: 1 }, { a: 3 }];
// var result1 = [];
// var obj = {};
// for (var i = 0; i < arr.length; i++) {
//   if (!obj[arr[i].a]) {
//     console.log("object :>> ", obj[arr[i].a]);
//     obj[arr[i].a] = true;
//   } else {
//     result1.push(arr[i]);
//   }
// }
// console.log("result ---- 1", result1);
