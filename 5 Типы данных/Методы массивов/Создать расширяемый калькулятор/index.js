function Calculator() {
    
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };

  this.calculate = function (str) {
    let split = str.split(" "), op1 = +split[0], op2 = split[1], op3 = +split[2];

    if (!this.methods[op2] || isNaN(op1) || isNaN(op3)) {
      return NaN;
    }

    return this.methods[op2](op1, op3);
  };

  this.addNewMethod = function (name, func) {
    this.methods[name] = func;
  };
}

let powerCalc = new Calculator;
powerCalc.addNewMethod("*", (a, b) => a * b);
powerCalc.addNewMethod("/", (a, b) => a / b);
powerCalc.addNewMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log( result ); // 8
