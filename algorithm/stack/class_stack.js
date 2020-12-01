class Stack {
  constructor() {
    this.stack = [];
  }
  peek() {
    return this.stack.length > 0 ? this.stack[this.stack.length - 1] : 0;
  }
  push(val) {
    this.stack.push(val);
  }
  pop() {
    this.stack.pop();
  }
}
const stack = new Stack();

stack.push(1);
stack.push(1);
stack.pop();
stack.peek();
console.log("object :>> ", stack);
