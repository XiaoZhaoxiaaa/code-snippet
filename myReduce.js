let arr = [1, 2, 3, 4, 5];

function myReduce(cb, initialValue) {
  let accu = initialValue ? initialValue : this[0];
  for (let index = init ? 0 : 1; index < this.length; index++) {
    accu = cb(accu, this[index], index, this);
  }
  return accu;
}

// let sum = arr.reduce(function (init, num) {
//   console.log("this :>> ", this);
//   return init + num;
// });
// console.log("sum :>> ", sum);
arr.reduce();
