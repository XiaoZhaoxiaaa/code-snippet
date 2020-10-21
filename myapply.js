// Function.prototype.myapply = function (context) {
//   context = context || window;
//   context.fn = this;
//   let result;
//   if (arguments[1]) {
//     result = context.fn(...arguments[1]);
//   } else {
//     result = context.fn();
//   }
//   delete context.fn;
//   return result;
// };

Function.prototype.myapply = function (thisArg = window) {
  // thisArg.fn 指向当前函数fn (fn.myCall)
  console.log("this", this);
  thisArg.fn = this;
  console.log("arguments :>> ", arguments);
  // 第一个参数为this, 所以取剩下的参数
  const args = [...arguments].slice(1);
  // 执行函数
  const result = thisArg.fn([...args]);
  delete thisArg.fn;
  return result;
};
const obj = {
  name: "坏蛋",
};

function fn() {
  console.log(this.name);
}
fn.myapply(obj, [12, 13]);
