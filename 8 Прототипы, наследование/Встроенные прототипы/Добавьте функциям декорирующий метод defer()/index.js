Function.prototype.defer = function(time) {
  let func = this;
  return function(...args) {
    setTimeout(() => func.apply(this, args), time);
  }
};

function f(a, b) {
  console.log( a + b );
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.