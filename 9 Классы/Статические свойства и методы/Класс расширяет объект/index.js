class Rabbit extends Object {
  constructor(name) {
    super(); // нужно вызывать контсруктор родителя всегда
    this.name = name;
  }
}

let rabbit = new Rabbit("Кроль");

console.log( rabbit.hasOwnProperty('name') ); // Ошибка