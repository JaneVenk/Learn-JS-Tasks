let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

// Подойдет структура данных WeakSet

let readMessages = new WeakSet();

// Когда сообщение прочитано, в WeakSet заносится объект прочитанного сообщения

readMessages.add(messages[0]); // прочитано первое сообщение

// Можно проверит, было ли сообщение прочитано

readMessages.has(messages[0]); // true

// Если сообщение удалится из messages оно автоматически удалится и из WeakSet