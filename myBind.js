// function Person(name, age, gender) {
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
// }
// let obj = {
//   hobby: "看书",
// };
// let change = Person.bind(obj, "xiao");
// change = new change(20, "man");
// console.log("change :>> ", change);

Function.prototype.myBind = function () {
  let _this = this;
};

Function.prototype.bind = function (context, ...args) {
  let self = this; //谨记this表示调用bind的函数
  let fBound = function () {
    //this instanceof fBound为true表示构造函数的情况。如new func.bind(obj)
    return self.apply(this instanceof fBound ? this : context || window, args);
  };
  fBound.prototype = Object.create(this.prototype); //保证原函数的原型对象上的属性不丢失
  return fBound;
};
