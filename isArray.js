Array.myIsArray = function (arr) {
  return Object.prototype.toString.call(Object(arr) === "[object Array]");
};
