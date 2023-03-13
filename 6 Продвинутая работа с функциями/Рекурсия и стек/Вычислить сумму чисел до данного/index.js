// 1

function sumTo(n) {
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

console.log(sumTo(100)); // 5050

// 2

function sumTo(n) {
  if (n > 1) {
    return n + sumTo(n - 1);
  } else if (n == 1) {
    return 1;
  }
}

console.log(sumTo(100)); // 5050 - самый долгий варинт, максимум операций

// 3

function sumTo(n) {
  const sum = (n * (n + 1)) / 2;
  return sum;
}

console.log(sumTo(100)); // 5050 - самый быстрый вариант, минимум операций


// Рекурсия sumTo(100000) может выдать ошибку или выполниться без ошибок, это зависит от объема памяти, выделяющегося на эти вычисления
