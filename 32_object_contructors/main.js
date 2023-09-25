// object function
/*function dog(breed, color) {
  this.breed = breed;
  this.color = color;
}

// factory fucntion
function fogFactory(breed, color) {
  return { breed, color };
}

// The clas Syntax
class Dog {
  constructor(breed, color) {
    this.breed = breed;
    this.color = color;
  }

  get breed() {
    return this._breed;
  }

  set breed(value) {
    this._breed = value;
  }

  bark() {
    console.log("arf arf arf!");
  }
}

const dog1 = new Dog("golden retriever", "brown");
console.log(dog1);
dog1.breed = "rottweiler";
*/

//  module pattern
/*const calculator = (() => {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;
  return {
    add,
    sub,
    mul,
    div,
  };
})();

console.log(calculator.add(5, 5));
*/
// ES6 modules

