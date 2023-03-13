// // 1

// function printNumbers(from, to) {
//   let current = from;

//   let timer = setInterval(function() {
//     console.log(current);
//     if (current == to) {
//       clearInterval(timer);
//     }
//     current++;
//   }, 1000);
// }

// printNumbers(1, 10);

// 2

function printNumbers(from, to) {
  let current = from;

  setTimeout(function print() {
    console.log(current);
    if (current < to) {
      setTimeout(print, 1000);
    }
    current++;
  }, 1000);
}

printNumbers(1, 10);
