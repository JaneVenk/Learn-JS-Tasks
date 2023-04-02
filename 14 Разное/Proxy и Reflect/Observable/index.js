let handlers = Symbol("handlers");

function makeObservable(target) {
  target[handlers] = [];
  target.observe = function (handler) {
    this[handlers].push(handler);
  };

  return new Proxy(target, {
    set(target, prop, value) {
      let result = Reflect.set(...arguments);
      if (result) {
        target[handlers].forEach((handler) => handler(prop, value));
      }
      return result;
    },
  });
}

let user = {};
user = makeObservable(user);

user.observe((key, value) => {
  console.log(`SET ${key}=${value}`);
});

user.name = "John"; // выводит: SET name=John
