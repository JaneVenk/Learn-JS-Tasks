let arr = ["a", "b"];

arr.push(function() {
  console.log( this );
});

arr[2](); // [ 'a', 'b', [Function (anonymous)] ] 3-й элемент массива - анонимная функция, которая выводит this, this в данном случае - arr