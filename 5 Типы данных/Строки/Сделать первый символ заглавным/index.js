function ucFirst(str){
    return (!str || str.length === 0) ? "Пустая строка" : str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst()); // Пустая строка
console.log(ucFirst("")); // Пустая строка
console.log(ucFirst("jane")); // Jane
