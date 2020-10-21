Array.prototype.myMap = function (fn, mapCal) {
  console.log("this :>> ", this);
  console.log("mapCal :>> ", mapCal);
  console.log("fn :>> ", fn);
  var arr = Array.prototype.slice.call(this);
  var mappedArr = [];
  for (var i = 0; i < arr.length; i++) {
    mappedArr.push(fn.call(mapCal, arr[i], i, this));
  }
  return mappedArr;
};

let ary = [1, 2, 3, 4];
let result = ary.myMap((item, index) => {
  return item + 2;
});
console.log("result :>> ", result);
