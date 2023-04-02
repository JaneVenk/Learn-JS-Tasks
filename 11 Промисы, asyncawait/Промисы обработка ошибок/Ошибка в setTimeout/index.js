new Promise(function(resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(console.log); // Error: Whoops! ощибка сгенерируется не по ходу выполнения когда, а позже, при выполнении микрозадачи