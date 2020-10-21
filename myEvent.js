class event {
  constructor() {
    this._cache = {};
  }
  on(type, cb) {
    if (!this._cache[type]) {
      this._cache[type] = [];
    }
    // indexOf 方法不行， 函数的位置通过indexOF是不行的
    // if (this._cache[type].indexOf(cb) === -1) {
    //   this._cache[type].push(cb);
    // }
    let flag = false;
    this._cache[type].forEach(val, (index) => {
      if (val.name == cb.name) {
        flag = true;
      }
    });
    if (!flag) {
      this._cache[type].push(cb);
    }
  }
  // 解绑方法
  off(type, cb) {
    if (!this._cache[type]) {
      console.error(new Error("this type is not defined"));
    } else {
      this._cache[type].forEach((val, index) => {
        if (val.name === cb.name) {
          this._cache[type].splice(index, 1);
        }
      });
    }
  }
  // 触发方法
  trigger(type, data) {
    if (this._cache[type]) {
      this._cache[type].forEach((val) => {
        val(data);
      });
    }
  }
}

let e = new event();
// e.on("click", function clg() {
//   console.log("hellowrold :>> ");
// });

e.off("click", function clg() {
  console.log("hello :>> ");
});
