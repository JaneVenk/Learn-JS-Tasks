function copySorted(arr){
    const newArray = Object.assign([],arr);
    newArray.sort();
    return newArray;
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (без изменений)
