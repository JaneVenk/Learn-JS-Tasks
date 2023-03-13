function debounce(f, time) {
  let reset = false;
  return function () {
    if (reset) return;
    f.apply(this, arguments);
    reset = true;
    setTimeout(() => (reset = false), time);
  };
}

let f = debounce(console.log, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout(() => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout(() => f(4), 1100); // выполняется
setTimeout(() => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)
