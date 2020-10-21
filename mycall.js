Function.prototype.myCall = function (thisArg = window) {
  // thisArg.fn 指向当前函数fn (fn.myCall)
  console.log("this", this);
  thisArg.fn = this;
  // 第一个参数为this, 所以取剩下的参数
  const args = [...arguments].slice(1);
  // 执行函数
  const result = thisArg.fn(...args);
  delete thisArg.fn;
  return result;
};
const obj = {
  name: "坏蛋",
};

function fn() {
  console.log(this.name);
}
fn.myCall(obj, 12, 13);
