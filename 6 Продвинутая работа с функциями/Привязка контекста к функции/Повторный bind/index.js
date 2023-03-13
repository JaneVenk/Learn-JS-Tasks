function f() {
  console.log(this.name);
}

f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );

f(); // Вася - изменить существующую привязку нельзя, но можно сделать новую