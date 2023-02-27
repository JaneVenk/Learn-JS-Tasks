let user = {
  name: "Василий Иванович",
  age: 35
};

let userJSON = JSON.stringify(user);

console.log(userJSON); // {"name":"Василий Иванович","age":35}

let newUserObject = JSON.parse(userJSON);

console.log(newUserObject); // { name: 'Василий Иванович', age: 35 }