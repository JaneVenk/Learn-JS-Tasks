function makeCounter() {
  let count = 0;
  function counter() {
    return count++;
  }
  counter.set = (value) => (count = value);
  counter.decrease = () => count--;
  return counter;
}

let counter = makeCounter();

counter.set(10); // установка счетчика

console.log(counter()); // 10

counter.decrease(); // уменьшение значения на 1

console.log(counter()); // 10

console.log(counter()); // 11

counter.set(0); // установка счетчика
console.log(counter()); // 1
