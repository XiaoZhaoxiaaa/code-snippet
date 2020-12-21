// 递归加记忆化
// const fib = (n, memory = []) => {
//   if (n < 2) {
//     return n;
//   }
//   if (!memory[n]) {
//     console.log("memory :>> ", memory, memory[n]);
//     memory[n] = fib(n - 1, memory) + fib(n - 2, memory);
//   }
//   return memory[n];
// };

function Fibonacci(n, memory = []) {
  if (n < 2) {
    return n;
  }
  if (!memory[n]) {
    console.log("memory,momory[n] :>> ", memory);
    memory[n] = Fibonacci(n - 1, memory) + Fibonacci(n - 2, memory);
  }
  console.log("memory[n] :>> ", memory[n]);
  return memory[n];
}
Fibonacci(6);

// 动态规划

function Fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  let i = 1;
  let pre = 0;
  let current = 1;
  let result = 0;
  while (i++ < n) {
    result = pre + current;
    pre = current;
    current = result;
  }
  return result;
}

function jumpFloor(n) {
  if (n <= 2) {
    return n;
  }
  let i = 2;
  let pre = 1;
  let current = 2;
  let result = 0;
  while (i++ < n) {
    result = pre + current;
    pre = current;
    current = result;
    // [pre, result] = [current, pre + current];
    // [result, pre] = [pre + current, current];
  }
  return result;
}

console.log(jumpFloor(6));

var climbStairs = function (n) {
  let prev = 1;
  let cur = 1;
  for (let i = 2; i <= n; i++) {
    [prev, cur] = [cur, prev + cur];
  }
  return cur;
};

console.log(climbStairs(5));
