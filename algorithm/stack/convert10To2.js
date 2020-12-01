function convert10To2(num) {
  const stack = [];
  while (num >= 1) {
    if (num % 2 >= 1) {
      stack.push(1);
    } else {
      stack.push(0);
    }
    num = num / 2;
  }

  let result = "";
  while (stack.length != 0) {
    result += stack.pop();
  }
  return result;
}

console.log(convert10To2(100));
