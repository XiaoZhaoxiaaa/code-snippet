function create2(Fn) {
  let F = function () {};
  F.prototype = Fn;
  F.prototype.constructor = F;
  return new F();
}
function person() {
  this.name = "sdf";
  this.age = 12;
}
let obj1 = create2(person);
console.log("object :>> ", Object.create(person));
console.log("obj1 :>> ", obj1);
