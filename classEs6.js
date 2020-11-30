class A {
  constructor(name) {
    this.name = name;
  }
  static say() {
    console.log("hello");
  }
  sayName() {
    conole.log("my name is", this.name);
    return this.name;
  }
}

class B extends A {
  constructor(naem, age) {
    super(name);
    this.age = age;
  }

  sayAge() {
    console.log("my age is", this.agee);
    return this.age;
  }
}

let a = new A("A");
let b = new B("B", 12);
