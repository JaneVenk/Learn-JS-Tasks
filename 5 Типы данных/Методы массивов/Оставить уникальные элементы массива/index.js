function unique(arr) {
    return arr.filter((element, index) => {return index === arr.indexOf(element)});
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log( unique(strings) ); // кришна, харе, :-O