let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

// Можно использовать WeakMap

let readMessagesWithTime = new WeakMap();

readMessagesWithTime.set(messages[0], new Date(2017, 1, 1));

// Все работает аналогично предыдущему варианту, только есть дополнительная информация - время