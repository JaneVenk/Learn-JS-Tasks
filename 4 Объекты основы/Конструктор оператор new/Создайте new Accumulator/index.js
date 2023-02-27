function Accumulator(startingValue){
    this.value = 0;

    this.read = function(){
        this.value += +startingValue;
    }
}

let accumulator = new Accumulator(prompt("Введите число"));

accumulator.read();
accumulator.read();

alert(accumulator.value);