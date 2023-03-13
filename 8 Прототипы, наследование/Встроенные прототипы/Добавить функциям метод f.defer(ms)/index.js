Function.prototype.defer = function(time) {
  setTimeout(this, time);
};

function f() {
  console.log("Hello!");
}

f.defer(1000); // выведет "Hello!" через 1 секунду