function camelize(str){

    const strArray = str.split("-");

    const newString = strArray.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join("");

    return newString;
}




console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));