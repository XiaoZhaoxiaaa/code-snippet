function clone(obj) {
  if (typeof obj === "object") {
    let cloneObj = {};
    for (let key in obj) {
      cloneObj = clone(obj[key]);
    }
    return cloneObj;
  }
  return obj;
}

let obj = {
  a: {
    b: {
      c: "aaa",
    },
  },
};

let aaa = clone(obj);
console.log("aaa :>> ", aaa);
