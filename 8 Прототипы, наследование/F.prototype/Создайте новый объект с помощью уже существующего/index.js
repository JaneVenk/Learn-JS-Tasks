function Persone(name,age) {
  this.name = name;
  this.age = age;
}

const jane = new Persone("jane", 23);
const ann = new jane.constructor("Ann", 27);

console.log(ann); // Persone { name: 'Ann', age: 27 }