let promise = new Promise(function(resolve, reject) {
  resolve(1); // после вызова resolve выполнение промиса прекратится

  setTimeout(() => resolve(2), 1000);
});

promise.then(console.log); // 1