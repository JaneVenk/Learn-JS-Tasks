function sum(number1) {
  return function (number2) {
    return number1 + number2;
  };
}

console.log(sum(1)(2)); // 3
console.log(sum(5)(-1)); // 4
