// 懒汉式  调用的时候创建实例
class Single {
  static getInstance() {
    if (!Single.instance) {
      Single.instance = new Single();
    }
    return Single.instance;
  }
}
// 饿汉式  是在初始化就创建好实例
class Single2 {
  static instance = new Single2();
  static getInstance() {
    return Single2.instance;
  }
}
