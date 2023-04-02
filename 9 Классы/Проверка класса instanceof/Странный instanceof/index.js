function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

console.log( a instanceof B ); // true потому что instanceof проверяет только цепочки прототипов, а прототипы A и B равны.