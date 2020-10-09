class Observer {
  constructor() {}
  // update() {
  //   this.
  // }
}

class Subject {
  constructor() {
    this.observers = []; // 观察者队列
  }
  addObserver(observer) {
    this.observers.push(observer);
  }
  notify() {
    this.observers.forEach((observer) => {
      observer.update();
    });
  }
}

var subject = new Subject();

const ob1 = new Observer(update);
