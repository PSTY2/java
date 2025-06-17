// Lab 20 – this / class demo (variant 9)
export class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Привіт, я ${this.name}!`);
  }
}
const demo = new Person("Демо");
demo.greet();
