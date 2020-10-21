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
