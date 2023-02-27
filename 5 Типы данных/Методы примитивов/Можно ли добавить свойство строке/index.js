let str = "Привет";

str.test = 5;

console.log(str.test); // выведется undefined, примитив string не объект, он не может хранить дополнительные свойства