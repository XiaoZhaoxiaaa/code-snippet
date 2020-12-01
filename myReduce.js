let arr = [1, 2, 3, 4, 5];

Array.prototype.myReduce = function (cb, initialValue) {
  let accu = initialValue ? initialValue : this[0];
  for (let index = initialValue ? 0 : 1; index < this.length; index++) {
    accu = cb.call(null, accu, this[index], index, this);
  }
  return accu;
};

// let sum = arr.reduce(function (init, num) {
//   console.log("this :>> ", this);
//   return init + num;
// });
// console.log("sum :>> ", sum);
let res = arr.myReduce((item, num) => {
  return item + num;
});
console.log("res :>> ", res);
