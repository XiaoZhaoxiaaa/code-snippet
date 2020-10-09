function iteratorGenerator(list) {
  var idx = 0;
  var len = list.length;
  return {
    next: function () {
      var done = idx >= len;
      var value = !done ? list[idx++] : undefined;
      return {
        done,
        value,
      };
    },
  };
}

var iterator = new iteratorGenerator(["a", "b", "c"]);
// iterator.next();
// iterator.next();
// iterator.next();
console.log("object :>> ", iterator.next());
console.log("object :>> ", iterator.next());
console.log("object :>> ", iterator.next());
console.log("object :>> ", iterator.next());
