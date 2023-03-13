function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  console.log(this.name);
};

let rabbit = new Rabbit("Rabbit");


rabbit.sayHi(); // Rabbit
Rabbit.prototype.sayHi(); // indefined
Object.getPrototypeOf(rabbit).sayHi(); // indefined
rabbit.__proto__.sayHi(); // indefined
