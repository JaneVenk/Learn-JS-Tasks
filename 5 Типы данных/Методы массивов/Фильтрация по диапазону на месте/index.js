function filterRangeInPlace(arr, a, b) {
  arr.map((arrElement, index) => {
    if (arrElement < a || arrElement > b) {
      arr.splice(index, 1);
    }
  });
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);

console.log(arr); // [3, 1]
