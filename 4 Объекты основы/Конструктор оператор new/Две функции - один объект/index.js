const object = {};

function A() {return object}
function B() {return object}

let a = new A();
let b = new B();

console.log( a == b ); // Такое возможно, если функии A и B будут возвращать один и тот же объект или массив []