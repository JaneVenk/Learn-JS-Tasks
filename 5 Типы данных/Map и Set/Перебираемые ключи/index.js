let map = new Map();

map.set("name", "John");

let keys = map.keys(); // это итерируемый объект, а не массив

console.log(keys); // [Map Iterator] { 'name' }

// keys.push("more"); // так не сработает 

keys = Array.from(keys);

keys.push("more")

console.log(keys); // name, more

