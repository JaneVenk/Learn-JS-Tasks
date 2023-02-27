function unique(arr) {
    return Array.from(new Set(arr));
}

// или 

// function unique(arr) {
//     return arr.filter((element, index) => {return index === arr.indexOf(element)});
// }

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) ); // Hare,Krishna,:-O