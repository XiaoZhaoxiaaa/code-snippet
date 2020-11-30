var climbStairs = function (n) {
  return new Array(n + 1)
    .fill(1)
    .reduce((p, v, i) => (i > 1 && (p = [p[1], p[0] + p[1]]) && false) || p, [
      1,
      1,
    ])[1];
};

let climbStairs = function (n) {
  let res = 1,
    n1 = 1,
    n2 = 1;
  for (let i = 2; i <= n; i++) {
    res = n1 + n2;
    n1 = n2;
    n2 = res;
  }
  return res;
};
