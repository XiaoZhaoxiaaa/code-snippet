function myNew(Fn, ...args) {
  this.obj = {};
  Object.setPrototypeOf(this.obj, Fn.prototype);
  let result = Fn.apply(this.obj, args);
  return result instanceof Object ? result : this.obj;
}

function person() {
  this.name = "xia";
  let obj = {};
  return obj;
}
let a = new person();
console.log("object :>> ", a);
