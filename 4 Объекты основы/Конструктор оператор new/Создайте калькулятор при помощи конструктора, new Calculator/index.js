function Calculator(){
    this.a;
    this.b;

   this.read = function(a, b){
    this.a = a;
    this.b = b;
    };

    this.sum = function(){
        return this.a + this.b;
    }

    this.mul = function(){
        return this.a * this.b;
    }
};

const calculator = new Calculator();

calculator.read(3,4);

console.log(calculator.sum());
console.log(calculator.mul());

