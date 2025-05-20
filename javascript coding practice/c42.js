// [42]Write a Program to create a simple class in JavaScript?

class Car {
  constructor() {
    this.tyres = 4;
    this.mode = "road";
  }
  drive() {
    return "car is driving";
  }
}

const alto = new Car();
console.log(alto.mode);
console.log(alto.drive());
