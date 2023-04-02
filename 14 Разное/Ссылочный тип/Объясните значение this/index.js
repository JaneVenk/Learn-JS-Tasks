let obj, method;

obj = {
  go: function() { console.log(this); }
};

obj.go();               // (1) [object Object] - вызов метода, this ссылается на объект

(obj.go)();             // (2) [object Object] - то же самое

(method = obj.go)();    // (3) undefined - переменная method ссылается на функцию, this нет 

(obj.go || obj.stop)(); // (4) undefined - похоже на 3, this тоже теряется, поэтому в результате undefined