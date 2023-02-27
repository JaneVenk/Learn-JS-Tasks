function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

console.log( user.ref.name ); // Каким будет результат? Ответ: undefined , потому что this внутри функции makeUser() - undefined.
// и вызов this внутри объекта осуществяется без ".", поэтому ref в объекте - undefined