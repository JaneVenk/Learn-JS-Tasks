function f(a) {
  console.log(a);
}

function throttle(f, time) {
  let isThrottled = false,
    savedArgs,
    savedThis;
  function outerF() {
    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }
    f.apply(this, arguments); 
    isThrottled = true;

    setTimeout(function () {
      isThrottled = false; 
      if (savedArgs) {
        outerF.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, time);
  }
  return outerF;
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)

// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано
