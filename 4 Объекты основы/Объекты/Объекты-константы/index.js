const user = {
  name: "John"
};

// это будет работать? Ответ : Да, меняется только свойство объекта, а не сам объект,
// а вот присвоить новый обект переменной user в данном случае не получится
user.name = "Pete";

user = {};

