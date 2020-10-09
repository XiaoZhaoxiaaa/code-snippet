// class Student {
//   constructor(teacher) {}
//   update() {}
// }

// 发布者
class Publisher {
  constructor() {
    this.observers = [];
    this.prdState = null;
  }

  add(observer) {
    this.observers.push(observer);
  }
  notify() {
    this.observers.forEach((observer) => {
      console.log("this :>> ", this);
      observer.update(this);
    });
  }

  getState() {
    return this.prdState;
  }

  setState(state) {
    this.prdState = state;
    this.notify();
  }
}

class Observer {
  constructor() {
    this.prdState = {};
  }

  update(publisher) {
    // console.log("object :>> ", publisher);
    // 更新需求文档
    this.prdState = publisher.getState();
    this.work();
  }

  work() {
    const prd = this.prdState;
    console.log("prd :>> ", prd);
  }
}

const wang = new Observer();
const zhang = new Observer();
const chang = new Publisher();
const prd = {
  url: "sfsfaa",
};
chang.add(wang);
chang.add(zhang);
chang.setState(prd);
