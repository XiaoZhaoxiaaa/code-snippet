/**
 * 缓存代理模式
 * 虚拟缓存    

 */

const myImage = (function () {
  const imgNode = document.createElement("img");
  document.body.appendChild(imgNode);
  return {
    setSrc: function (src) {
      imgNode.src = src;
    },
  };
})();

const proxyImage = (function () {
  const img = new Image();
  img.onload = function () {
    // http 图片加载完毕后才会执行
    myImage.setSrc(this.src);
  };
  return {
    setSrc: function (src) {
      myImage.setSrc("loading.jpg"); // 本地 loading 图片
      img.src = src;
    },
  };
})();

proxyImage.setSrc("http://loaded.jpg");

// function Person(name, age, job) {
//   this.name = name;
//   this.age = age;
//   this.job = job;
// }

// var person1 = new Person("xia", 12, "engineer");

// console.log(person1.constructor === Person);
// console.log("Person.prototype.prototype :>> ", Person.prototype.prototype);
// console.log("Object :>> ", Object.__proto__ === Function.prototype);
