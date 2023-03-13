function sum(number1) {
  let currentSum = number1;

  function func(number2) {
    currentSum += number2;
    return func;
  }

  func.toString = function () {
    return currentSum;
  };

  return func;
}

let a = sum(1)(2);

console.log(a.toString()); // 3

a = sum(1)(2)(3);
console.log(a.toString()); // 6

a = sum(5)(-1)(2);
console.log(a.toString()); // 6

a = sum(6)(-1)(-2)(-3);
console.log(a.toString()); // 0

a = sum(0)(1)(2)(3)(4)(5);
console.log(a.toString()); //  15
